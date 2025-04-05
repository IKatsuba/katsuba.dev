'use server'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { z } from 'zod'

const formDataSchema = z.object({
  email: z.string().email(),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function subscribe(formData: FormData) {
  const emailData = formData.get('email')

  const validatedFields = formDataSchema.safeParse({
    email: emailData,
  })

  if (!validatedFields.success) {
    return { error: 'Invalid fields' }
  }

  const { email } = validatedFields.data

  resend.contacts.create({
    email: email,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  })

  redirect(`/thank-you`)
}
