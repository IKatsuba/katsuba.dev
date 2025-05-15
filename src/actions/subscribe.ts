'use server';
import { resend } from '@/lib/resend';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const formDataSchema = z.object({
  email: z.string().email(),
});

export async function subscribe(formData: FormData) {
  const emailData = formData.get('email');

  const validatedFields = formDataSchema.safeParse({
    email: emailData,
  });

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { email } = validatedFields.data;

  resend.contacts.create({
    email: email,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });

  redirect(`/thank-you`);
}
