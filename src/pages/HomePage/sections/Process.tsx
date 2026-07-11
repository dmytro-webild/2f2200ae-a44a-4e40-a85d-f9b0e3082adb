import React from 'react';
import Tag from '@/components/ui/Tag';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card from '@/components/ui/Card';
import HoverPattern from '@/components/ui/HoverPattern';

export default function ProcessSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background" data-webild-section="process" id="process">
      <div className="w-content-width mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <ScrollReveal variant="fade-blur">
            <Tag text="Our Process" className="mb-6" />
          </ScrollReveal>
          <TextAnimation 
            text="You Show Up. We Handle The Rest." 
            variant="fade-blur" 
            tag="h2" 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight mb-6" 
            gradientText={false} 
          />
          <ScrollReveal variant="fade-blur" delay={0.2}>
            <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto">
              No lists to chase. No bidding wars. Just homeowners who already chose you — before they ever booked.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ScrollReveal variant="slide-up" delay={0.3} className="h-full">
            <Card className="h-full p-8 md:p-10 flex flex-col relative overflow-hidden group">
              <HoverPattern />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-5xl font-serif text-accent opacity-50 mb-6">01</div>
                <h3 className="text-2xl font-medium text-foreground mb-4">We Make You The Only Choice</h3>
                <p className="text-accent leading-relaxed mt-auto">
                  Ready homeowners in your market, positioned to see you as the premium name. Never one of five bids. The one they came for.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" delay={0.4} className="h-full">
            <Card className="h-full p-8 md:p-10 flex flex-col relative overflow-hidden group">
              <HoverPattern />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-5xl font-serif text-accent opacity-50 mb-6">02</div>
                <h3 className="text-2xl font-medium text-foreground mb-4">We Pre-Sell Them On You</h3>
                <p className="text-accent leading-relaxed mt-auto">
                  Every follow-up, handled. They reach your calendar already knowing your name, your work, your vision. Sold before they show.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" delay={0.5} className="h-full">
            <Card className="h-full p-8 md:p-10 flex flex-col relative overflow-hidden group">
              <HoverPattern />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-5xl font-serif text-accent opacity-50 mb-6">03</div>
                <h3 className="text-2xl font-medium text-foreground mb-4">You Show Up And Close</h3>
                <p className="text-accent leading-relaxed mt-auto">
                  No cold-calling. No chasing. Just a homeowner who booked themselves in. Sit down and win the job.
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade-blur" delay={0.6}>
          <Card className="mt-16 md:mt-24 p-8 md:p-12 text-center relative overflow-hidden">
            <HoverPattern />
            <p className="relative z-10 text-xl md:text-2xl font-medium text-foreground max-w-3xl mx-auto">
              Everything before the handshake is ours. The handshake is yours.
            </p>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
