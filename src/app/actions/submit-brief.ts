'use server';

import { z } from 'zod';
import { supabase } from '@/lib/supabase';

const BriefSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  workEmail: z.string().email('Please enter a valid business work email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  roleTitle: z.string().min(2, 'Role title or tech mandate is required'),
  headcount: z.coerce.number().min(1, 'Headcount must be at least 1'),
  hiringModel: z.string().min(1, 'Please select a hiring model'),
  urgency: z.string().min(1, 'Please select urgency'),
  budgetRange: z.string().optional(),
  message: z.string().max(2000).optional(),
  honeypot: z.string().max(0, 'Spam detected'),
});

export type BriefFormState = {
  success: boolean;
  message?: string;
  leadRef?: string;
  errors?: Record<string, string[]>;
};

export async function submitHiringBrief(
  prevState: BriefFormState,
  formData: FormData
): Promise<BriefFormState> {
  try {
    const rawData = {
      companyName: formData.get('companyName'),
      contactPerson: formData.get('contactPerson'),
      workEmail: formData.get('workEmail'),
      phone: formData.get('phone'),
      roleTitle: formData.get('roleTitle'),
      headcount: formData.get('headcount'),
      hiringModel: formData.get('hiringModel'),
      urgency: formData.get('urgency'),
      budgetRange: formData.get('budgetRange') || undefined,
      message: formData.get('message') || '',
      honeypot: formData.get('company_website_honeypot') || '',
    };

    const parsed = BriefSchema.safeParse(rawData);
    if (!parsed.success) {
      return {
        success: false,
        message: 'Please review and fix the errors below.',
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const data = parsed.data;
    const leadCode = `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    // Store in Supabase if configured
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder-url.supabase.co'
    ) {
      try {
        await supabase.from('employer_leads').insert({
          company_name: data.companyName,
          contact_person: data.contactPerson,
          work_email: data.workEmail,
          phone: data.phone,
          role_title: data.roleTitle,
          headcount: data.headcount,
          hiring_model: data.hiringModel,
          urgency: data.urgency,
          budget_range: data.budgetRange,
          message: data.message,
          status: 'new',
        });
      } catch (dbErr) {
        console.error('Failed to insert lead into Supabase:', dbErr);
      }
    }

    // Send team alert via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.NOTIFICATION_EMAIL_FROM || 'leads@aspirevaluerecruits.com',
            to: process.env.NOTIFICATION_EMAIL_TO || 'leads@aspirevaluerecruits.com',
            subject: `[New Hiring Brief] ${data.companyName} - ${data.roleTitle} (${leadCode})`,
            html: `
              <h2>New Employer Hiring Brief Received</h2>
              <p><strong>Company:</strong> ${data.companyName}</p>
              <p><strong>Contact:</strong> ${data.contactPerson} (${data.workEmail}, ${data.phone})</p>
              <p><strong>Mandate:</strong> ${data.roleTitle} (Headcount: ${data.headcount})</p>
              <p><strong>Engagement Model:</strong> ${data.hiringModel}</p>
              <p><strong>Urgency:</strong> ${data.urgency}</p>
              <p><strong>Budget / CTC:</strong> ${data.budgetRange || 'Not specified'}</p>
              <p><strong>Notes:</strong> ${data.message || 'None'}</p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('Failed to send lead email via Resend:', emailErr);
      }
    }

    return {
      success: true,
      message: 'Hiring brief submitted successfully! An AVR partner will contact you within 2 hours.',
      leadRef: leadCode,
    };
  } catch (error) {
    console.error('Server error submitting brief:', error);
    return {
      success: false,
      message: 'Failed to submit hiring brief. Please try again or chat with us on WhatsApp.',
    };
  }
}
