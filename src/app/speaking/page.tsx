import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve spoken at events all around the world and been interviewed for many podcasts."
      intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="https://www.youtube.com/watch?v=pqV863ysMRQ&list=PLn02JbRfgXSBhufsAxMKhQeILKPK4g8nt"
            title="Repository evolution: from simple to complex"
            description="We talk a lot about the frontend. We discuss storing the application state, accessibility, new frameworks. Microfrontend has become the absolute champion in popularity in discussions in large companies. In medium-sized companies, they talk about UI Kit and TypeScript, and in small ones, developers prove to the product manager that tests are necessary."
            event="Frontend Conf 2021"
            cta="Watch video"
          />
          <Appearance
            href="https://youtu.be/j0OhmZeAoKQ?si=_hkJlB6kYR0fk3Cz"
            title="Extreme Pipeline Acceleration"
            description="This talk focuses on optimizing CI/CD pipelines, addressing common challenges in mature projects such as long build and deployment times. It covers techniques from simple pipeline job separation to advanced artifact caching systems, ultimately achieving a build acceleration down to just 1 second."
            event="CodeFest Russia 2022"
            cta="Watch video"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=D-JwmfQKfIE&list=PLn02JbRfgXSBhufsAxMKhQeILKPK4g8nt&index=3"
            title="It's all about Nx"
            description="This is a speech on how to use Nx to speed up development using code generation and save a lot of your time in CI pipelines."
            event="Podlodka 2022"
            cta="Watch video"
          />
        </SpeakingSection>
        {/* <SpeakingSection title="Podcasts">
          <Appearance
            href="#"
            title="Using design as a competitive advantage"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            event="Encoding Design, July 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Bootstrapping an aerospace company to $17M ARR"
            description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            event="The Escape Velocity Show, March 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Programming your company operating system"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
            cta="Listen to podcast"
          />
        </SpeakingSection> */}
      </div>
    </SimpleLayout>
  )
}
