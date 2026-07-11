import { ShieldCheck, Award, Medal, Star, CheckCircle } from 'lucide-react';
import LoopCarousel from '@/components/ui/LoopCarousel';
import ScrollReveal from '@/components/ui/ScrollReveal';

const partners = [
  { name: "National Roofing Association", icon: ShieldCheck },
  { name: "GAF Master Elite", icon: Award },
  { name: "BBB A+ Accredited", icon: Star },
  { name: "Owens Corning Platinum", icon: Medal },
  { name: "CertainTeed Select", icon: CheckCircle },
];

export default function PartnersSection() {
  return (
    <section data-webild-section="partners" id="partners" className="relative w-full py-16 bg-background overflow-hidden">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade">
          <p className="text-center text-sm font-medium text-accent mb-10 uppercase tracking-widest">
            Trusted by Industry Leaders & Associations
          </p>
          <LoopCarousel>
            <div className="flex items-center gap-16 px-8">
              {partners.map((partner, idx) => {
                const Icon = partner.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                    <span className="text-xl font-bold whitespace-nowrap text-foreground">{partner.name}</span>
                  </div>
                );
              })}
            </div>
          </LoopCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
}