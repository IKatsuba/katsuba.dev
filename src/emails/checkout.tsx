import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
  Button,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export type CheckoutEmailProps = {
  name: string;
  length: number;
  price: number;
  checkoutUrl: string;
};

export function CheckoutEmail(props: CheckoutEmailProps): React.JSX.Element {
  const { name, length, price, checkoutUrl } = props;
  return (
    <Html>
      <Head />
      <Preview>Consultation payment</Preview>
      <Tailwind>
        <Body className="m-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[600px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-[24px] font-normal text-black">
              Hello, {name}!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Thank you for booking a consultation. To confirm your booking, please proceed with the
              payment.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <b>Duration:</b> {length} minutes
              <br />
              <b>Price:</b>{' '}
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}
            </Text>
            <Button
              href={checkoutUrl}
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'inline-block',
                margin: '24px 0',
                fontWeight: 600,
                fontSize: '16px',
              }}
            >
              Proceed to payment
            </Button>
            <Text className="text-[14px] leading-[24px] text-black">
              If you have any questions, simply reply to this email or contact{' '}
              <a href="mailto:igor@katsuba.dev">igor@katsuba.dev</a>.
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Best regards,
              <br />
              Igor Katsuba
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
