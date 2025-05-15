import * as React from 'react';
import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export type CheckoutEmailProps = {
  name: string;
  length: number;
  price: number;
};

export function CheckoutEmail(props: CheckoutEmailProps): React.JSX.Element {
  return (
    <Html>
      <Head />
      <Preview>Important update: UI Kit course release postponed</Preview>
      <Tailwind>
        <Body className="m-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[600px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-[24px] font-normal text-black">
              Hello, dear friend!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              We have an important update regarding the <b>UI Kit</b> course.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              We have discovered a critical bug in the interactive code editor. To ensure you get
              the best experience, we are rebuilding this component.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              As a result, the course release is postponed to <b>May 25</b> (a 10-day delay).
            </Text>
            <Heading as="h2" className="mt-8 mb-2 text-[18px] font-semibold text-black">
              Compensation for the delay
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              As a token of our appreciation:
            </Text>
            <ul className="mb-4 ml-4 list-disc text-[14px] text-black">
              <li>
                <b>Only for you</b>, the final course will include <b>2 bonus modules</b>:
                <ul className="ml-4 list-disc">
                  <li>Module 11: Schematics and Automation</li>
                  <li>Module 12: Updates and Integration via ng add</li>
                </ul>
              </li>
              <li>
                On launch, <b>5 modules</b> will be available instead of 4
              </li>
            </ul>
            <Text className="text-[14px] leading-[24px] text-black">
              These bonuses will help you automate your workflow and efficiently manage library
              updates.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              We are committed to making this course as useful and high-quality as possible. Thank
              you for your patience!
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              If you have any questions, just send email to{' '}
              <a href="mailto:inbox@ng.guide">inbox@ng.guide</a>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Best regards, the ng.guide team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
