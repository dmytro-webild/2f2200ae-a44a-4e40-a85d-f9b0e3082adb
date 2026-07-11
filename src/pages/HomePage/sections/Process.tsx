import React from 'react';
import Tag from '@/components/ui/Tag';
import Separator from '@/components/ui/Separator';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProcessSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background" data-webild-section="process" id="process">
      <div className="w-content-width mx-auto">
        <div className="flex flex-col items-start max-w-3xl">
          <ScrollReveal variant="fade">
            <Tag text="Our Process" className="mb-6" />
          </ScrollReveal>
          <TextAnimation 
            text="You Show Up. We Handle The Rest." 
            variant="fade-blur" 
            tag="h2" 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight mb-6" 
            gradientText={false} 
          />
          <ScrollReveal variant="fade" delay={0.2}>
            <p className="text-lg md:text-xl text-accent max-w-2xl">
              No lists to chase. No bidding wars. Just homeowners who already chose you — before they ever booked.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade" delay={0.3}>
          <Separator className="my-16 md:my-24 opacity-20" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <ScrollReveal variant="fade" delay={0.4} className="flex flex-col">
            <h3 className="text-xl font-medium text-foreground mb-4">01 — We Make You The Only Choice</h3>
            <p className="text-accent leading-relaxed">
              Ready homeowners in your market, positioned to see you as the premium name. Never one of five bids. The one they came for.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.5} className="flex flex-col">
            <h3 className="text-xl font-medium text-foreground mb-4">02 — We Pre-Sell Them On You</h3>
            <p className="text-accent leading-relaxed">
              Every follow-up, handled. They reach your calendar already knowing your name, your work, your vision. Sold before they show.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.6} className="flex flex-col">
            <h3 className="text-xl font-medium text-foreground mb-4">03 — You Show Up And Close</h3>
            <p className="text-accent leading-relaxed">
              No cold-calling. No chasing. Just a homeowner who booked themselves in. Sit down and win the job.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade" delay={0.7}>
          <Separator className="my-16 md:my-24 opacity-20" />
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.8}>
          <p className="text-xl md:text-2xl font-medium text-foreground text-center max-w-3xl mx-auto">
            Everything before the handshake is ours. The handshake is yours.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}