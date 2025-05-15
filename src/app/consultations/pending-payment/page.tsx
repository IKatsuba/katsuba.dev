import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';

export const metadata: Metadata = {
  title: 'Payment Pending',
  description: 'Please pay the invoice sent to your email to confirm your booking.',
};

export default async function PendingPayment({
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
  const { email } = await searchParams;

  return (
    <SimpleLayout
      title="Almost done!"
      intro={`An invoice has been sent to your email${email ? ` (${email})` : ''}.
Please pay it within one hour to confirm your booking.
If you don\'t see the email, please check your spam folder or contact me.`}
    />
  );
}
