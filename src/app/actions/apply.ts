'use server';

import { z } from 'zod';
import { supabase } from '@/lib/supabase';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const ApplySchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  currentLocation: z.string().min(2, 'Please specify your current city/location'),
  totalExperienceYears: z.coerce.number().min(0, 'Experience must be 0 or greater'),
  noticePeriodDays: z.coerce.number().min(0, 'Notice period is required'),
  currentCtc: z.coerce.number().optional(),
  expectedCtc: z.coerce.number().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal('')),
  coverNote: z.string().max(1000).optional(),
  jobId: z.string().min(1, 'Invalid job reference'),
  jobSlug: z.string().min(1, 'Invalid job reference'),
  jobTitle: z.string().min(1, 'Job title is required'),
  honeypot: z.string().max(0, 'Spam detected'),
  dpdpConsent: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the DPDP privacy policy to proceed' }),
  }),
});

export type ApplyFormState = {
  success: boolean;
  message?: string;
  applicationRef?: string;
  errors?: Record<string, string[]>;
};

export async function submitApplication(
  prevState: ApplyFormState,
  formData: FormData
): Promise<ApplyFormState> {
  try {
    const rawData = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      currentLocation: formData.get('currentLocation'),
      totalExperienceYears: formData.get('totalExperienceYears'),
      noticePeriodDays: formData.get('noticePeriodDays'),
      currentCtc: formData.get('currentCtc') || undefined,
      expectedCtc: formData.get('expectedCtc') || undefined,
      linkedinUrl: formData.get('linkedinUrl') || '',
      coverNote: formData.get('coverNote') || '',
      jobId: formData.get('jobId'),
      jobSlug: formData.get('jobSlug'),
      jobTitle: formData.get('jobTitle'),
      honeypot: formData.get('website_url_check') || '', // Honeypot field
      dpdpConsent: formData.get('dpdpConsent') === 'on',
    };

    // 1. Zod Validation
    const validationResult = ApplySchema.safeParse(rawData);
    if (!validationResult.success) {
      return {
        success: false,
        message: 'Please resolve the highlighted validation errors.',
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    const validData = validationResult.data;

    // 2. Resume File Validation
    const resumeFile = formData.get('resume') as File | null;
    if (!resumeFile || resumeFile.size === 0) {
      return {
        success: false,
        message: 'Please upload your resume (PDF or DOCX format).',
        errors: { resume: ['Resume file is required'] },
      };
    }

    if (resumeFile.size > MAX_FILE_SIZE) {
      return {
        success: false,
        message: 'The uploaded file exceeds the 5 MB maximum size limit.',
        errors: { resume: ['File size exceeds 5 MB limit'] },
      };
    }

    if (!ACCEPTED_FILE_TYPES.includes(resumeFile.type)) {
      return {
        success: false,
        message: 'Unsupported format. Please upload a PDF, DOC, or DOCX document.',
        errors: { resume: ['Only PDF, DOC, and DOCX formats are supported'] },
      };
    }

    // 3. Application Reference ID
    const refCode = `AVR-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
    const storagePath = `resumes/${validData.jobSlug}/${refCode}-${resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    // 4. File Storage (Supabase Storage private bucket)
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder-url.supabase.co'
    ) {
      try {
        const fileBuffer = await resumeFile.arrayBuffer();
        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(storagePath, fileBuffer, {
            contentType: resumeFile.type,
            upsert: false,
          });

        if (uploadError) {
          console.error('Supabase storage upload error:', uploadError);
        }

        // Insert candidate and application records
        const { data: candidateData } = await supabase
          .from('candidates')
          .upsert(
            {
              email: validData.email,
              full_name: validData.fullName,
              phone: validData.phone,
              current_location: validData.currentLocation,
              total_experience_years: validData.totalExperienceYears,
              notice_period_days: validData.noticePeriodDays,
              current_ctc: validData.currentCtc,
              expected_ctc: validData.expectedCtc,
              linkedin_url: validData.linkedinUrl,
              dpdp_consent_granted: true,
              dpdp_consent_timestamp: new Date().toISOString(),
            },
            { onConflict: 'email' }
          )
          .select('id')
          .single();

        if (candidateData?.id) {
          await supabase.from('applications').insert({
            job_id: validData.jobId !== '1' && validData.jobId.length > 10 ? validData.jobId : null,
            candidate_id: candidateData.id,
            resume_file_path: storagePath,
            cover_note: validData.coverNote,
            status: 'new',
          });
        }
      } catch (err) {
        console.error('Database write error:', err);
      }
    }

    // 5. Send Transactional Notifications via Resend (Candidate receipt & Recruiter alert)
    if (process.env.RESEND_API_KEY) {
      try {
        // Fire Resend REST API
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.NOTIFICATION_EMAIL_FROM || 'notifications@aspirevaluerecruits.com',
            to: validData.email,
            subject: `Application Received: ${validData.jobTitle} [${refCode}]`,
            html: `
              <h2>Thank you for applying to Aspire Value Recruits</h2>
              <p>Dear ${validData.fullName},</p>
              <p>We have successfully received your application for <strong>${validData.jobTitle}</strong>.</p>
              <p><strong>Application Reference:</strong> ${refCode}</p>
              <p>Our recruitment consultants in Hyderabad & Bengaluru will review your profile against client requirements and reach out within 3 business days if shortlisted.</p>
              <p><strong>Note:</strong> Aspire Value Recruits strictly charges <em>₹0 candidate fees</em>. Our services are 100% free for applicants.</p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('Email dispatch error:', emailErr);
      }
    }

    return {
      success: true,
      message: 'Application submitted successfully! Our talent team will review your profile shortly.',
      applicationRef: refCode,
    };
  } catch (error) {
    console.error('Submit application server error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred while processing your application. Please try again.',
    };
  }
}
