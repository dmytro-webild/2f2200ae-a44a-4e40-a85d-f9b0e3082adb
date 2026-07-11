import Tag from '@/components/ui/Tag';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProcessSection() {
  return (
    <section className="relative w-full py-24 bg-background" data-webild-section="process" id="process">
      <div className="w-content-width mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal variant="fade" className="flex justify-center mb-6">
            <Tag text="Our Process" />
          </ScrollReveal>
          <TextAnimation
            text="You Show Up. We Handle The Rest."
            variant="slide-up"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            gradientText={false}
          />
          <ScrollReveal variant="fade" delay={0.2}>
            <p className="text-lg text-accent">
              Most agencies hand you a list of leads to chase. We bring you homeowners who already know your name, trust your work, and chose you — before they ever booked. All you do is show up and close.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal variant="fade" delay={0.3} className="card p-8 rounded-lg flex flex-col">
            <div className="text-sm font-bold text-accent mb-4">01</div>
            <h3 className="text-xl font-bold text-foreground mb-4">We Make You The Only Choice</h3>
            <p className="text-accent">
              We find homeowners in your market who are ready to invest in their roof — not tire-kickers, not price-shoppers. Before they hear from anyone, we position you as the premium name in your area. You're never one of five bids. You're the one they came for.
            </p>
          </ScrollReveal>
          
          <ScrollReveal variant="fade" delay={0.4} className="card p-8 rounded-lg flex flex-col">
            <div className="text-sm font-bold text-accent mb-4">02</div>
            <h3 className="text-xl font-bold text-foreground mb-4">We Pre-Sell Them On You</h3>
            <p className="text-accent">
              Every touchpoint is handled for you — the follow-up, the qualifying, the trust. By the time a homeowner reaches your calendar, they already know who you are, what you stand for, and why you're different. They walk in sold on you and your vision, not shopping around.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.5} className="card p-8 rounded-lg flex flex-col">
            <div className="text-sm font-bold text-accent mb-4">03</div>
            <h3 className="text-xl font-bold text-foreground mb-4">You Show Up And Close</h3>
            <p className="text-accent">
              No cold-calling. No chasing. No guessing if they're serious. Every appointment is a homeowner who raised their hand and booked themselves in. You do the one thing you're great at — sit down, connect, and win the job.
            </p>
          </ScrollReveal>
        </div>

        <div className="text-center">
          <ScrollReveal variant="fade" delay={0.6}>
            <p className="text-xl font-medium text-foreground">
              Everything before the handshake is ours. The handshake is yours.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}