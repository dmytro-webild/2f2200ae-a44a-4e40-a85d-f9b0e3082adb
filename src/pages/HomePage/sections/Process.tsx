import Tag from '@/components/ui/Tag';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Separator from '@/components/ui/Separator';

export default function ProcessSection() {
  return (
    <section className="relative w-full py-32 bg-background" data-webild-section="process" id="process">
      <div className="w-content-width mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <ScrollReveal variant="fade" className="flex justify-center mb-8">
            <Tag text="Our Process" />
          </ScrollReveal>
          <TextAnimation
            text="You Show Up. We Handle The Rest."
            variant="slide-up"
            tag="h2"
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-8 tracking-tight"
            gradientText={false}
          />
          <ScrollReveal variant="fade" delay={0.2}>
            <p className="text-xl md:text-2xl text-accent font-light leading-relaxed max-w-3xl mx-auto">
              Most agencies hand you a list of leads to chase. We bring you homeowners who already know your name, trust your work, and chose you — before they ever booked. All you do is show up and close.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24">
          <ScrollReveal variant="fade" delay={0.3} className="flex flex-col">
            <div className="text-6xl md:text-7xl font-serif text-accent opacity-40 mb-6">01</div>
            <Separator className="mb-6 opacity-50" />
            <h3 className="text-2xl font-medium text-foreground mb-4">We Make You The Only Choice</h3>
            <p className="text-accent leading-relaxed">
              We find homeowners in your market who are ready to invest in their roof — not tire-kickers, not price-shoppers. Before they hear from anyone, we position you as the premium name in your area. You're never one of five bids. You're the one they came for.
            </p>
          </ScrollReveal>
          
          <ScrollReveal variant="fade" delay={0.4} className="flex flex-col">
            <div className="text-6xl md:text-7xl font-serif text-accent opacity-40 mb-6">02</div>
            <Separator className="mb-6 opacity-50" />
            <h3 className="text-2xl font-medium text-foreground mb-4">We Pre-Sell Them On You</h3>
            <p className="text-accent leading-relaxed">
              Every touchpoint is handled for you — the follow-up, the qualifying, the trust. By the time a homeowner reaches your calendar, they already know who you are, what you stand for, and why you're different. They walk in sold on you and your vision, not shopping around.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.5} className="flex flex-col">
            <div className="text-6xl md:text-7xl font-serif text-accent opacity-40 mb-6">03</div>
            <Separator className="mb-6 opacity-50" />
            <h3 className="text-2xl font-medium text-foreground mb-4">You Show Up And Close</h3>
            <p className="text-accent leading-relaxed">
              No cold-calling. No chasing. No guessing if they're serious. Every appointment is a homeowner who raised their hand and booked themselves in. You do the one thing you're great at — sit down, connect, and win the job.
            </p>
          </ScrollReveal>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal variant="fade" delay={0.6} className="p-10 md:p-16 card rounded-2xl border border-black/5">
            <p className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
              Everything before the handshake is ours. <br className="hidden md:block" />
              <span className="text-accent italic">The handshake is yours.</span>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
