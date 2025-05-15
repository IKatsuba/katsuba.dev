import { type Metadata } from 'next';

import { SimpleLayout } from '@/components/SimpleLayout';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Thank you for booking a consultation',
  description: 'Thanks for booking a consultation with me.',
};

export default async function ThankYou({
  searchParams,
}: {
  searchParams: Promise<{
    overlayCalendar: string;
    user: string;
    type: string;
    isSuccessBookingPage: string;
    email: string;
    eventTypeSlug: string;
    uid: string;
    title: string;
    description: string;
    attendeeName: string;
    startTime: string;
    endTime: string;
    location: string;
    hostName: string;
    hostStartTime: string;
    attendeeStartTime: string;
  }>;
}) {
  const { user } = await searchParams;

  return (
    <SimpleLayout
      title="Thanks for booking a consultation."
      intro={`Hi ${user},

      I've received your booking request. I'll send you an email with the details of the meeting. If you have any questions, please don't hesitate to contact me.`}
    >
      <Button href="/consultations">Book another consultation</Button>
    </SimpleLayout>
  );
}
