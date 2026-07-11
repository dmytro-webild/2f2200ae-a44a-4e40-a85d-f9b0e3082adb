import LoopCarousel from '@/components/ui/LoopCarousel';

const partners = [
  "JOBNIMBUS",
  "ABC SUPPLY",
  "GAF",
  "OWENS CORNING",
  "CERTAINTEED",
  "BEACON",
  "IKO",
  "HAAG ENGINEERING",
  "BBB Accredited",
  "ACCULYNX"
];

export default function PartnersSection() {
  return (
    <section data-webild-section="partners" id="partners" className="relative w-full py-12 bg-background overflow-hidden">
      <div className="w-content-width mx-auto mb-8 text-center">
        <p className="text-sm font-medium text-accent uppercase tracking-wider">Trusted by & Partnered With</p>
      </div>
      <div className="w-full">
        <LoopCarousel>
          <div className="flex items-center gap-16 px-8">
            {partners.map((partner, i) => (
              <div key={i} className="text-xl md:text-2xl font-bold text-foreground/40 whitespace-nowrap">
                {partner}
              </div>
            ))}
          </div>
        </LoopCarousel>
      </div>
    </section>
  );
}