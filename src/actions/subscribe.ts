'use server'
import { redirect } from 'next/navigation'
import { Resend } from 'resend';
import { z } from 'zod';

const formDataSchema = z.object({
  email: z.string().email(),
})

const resend = new Resend(process.env.RESEND_API_KEY);


export async function subscribe(formData: FormData) {
  const emailData = formData.get('email')

  const validatedFields = formDataSchema.safeParse({
    email: emailData,
  });

  if (!validatedFields.success) {
    return { error: 'Invalid fields' }
  }

  const { email } = validatedFields.data

  resend.contacts.create({
    email: email,
    audienceId: '8b9d4734-4e25-46dc-bc7a-7c101e4cb1fd',
  });
  
  redirect(`/thank-you`)
}