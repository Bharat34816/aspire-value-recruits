'use server';

import { z } from 'zod';
import { supabase } from '@/lib/supabase';

const SalaryGuideSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid business or professional email'),
  companyOrRole: z.string().min(2, 'Company or role is required'),
  city: z.string().min(2, 'City is required'),
  honeypot: z.string().max(0, 'Spam detected'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms to download' }),
  }),
});

export type SalaryGuideFormState = {
  success: boolean;
  message?: string;
  downloadUrl?: string;
  errors?: Record<string, string[]>;
};

export async function requestSalaryGuide(
  prevState: SalaryGuideFormState,
  formData: FormData
): Promise<SalaryGuideFormState> {
  try {
    const rawData = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      companyOrRole: formData.get('companyOrRole'),
      city: formData.get('city'),
      honeypot: formData.get('middle_name_check') || '',
      consent: formData.get('consent') === 'on',
    };

    const parsed = SalaryGuideSchema.safeParse(rawData);
    if (!parsed.success) {
      return {
        success: false,
        message: 'Please fill in all required fields.',
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const data = parsed.data;

    // Log lead in Supabase employer_leads or contact_messages
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder-url.supabase.co'
    ) {
      try {
        await supabase.from('employer_leads').insert({
          company_name: data.companyOrRole,
          contact_person: data.fullName,
          work_email: data.email,
          phone: 'N/A (Salary Guide Lead)',
          role_title: 'Downloaded Salary Guide',
          hiring_model: 'lead_magnet',
          message: `Salary Guide Download Lead from ${data.city}`,
          status: 'new',
        });
      } catch (err) {
        console.error('Lead magnet DB write error:', err);
      }
    }

    return {
      success: true,
      message: 'Access granted! You can now download the 2026 Salary Benchmarks PDF report below.',
      downloadUrl: '#download-ready',
    };
  } catch (error) {
    return {
      success: false,
      message: 'An error occurred. Please try again.',
    };
  }
}
