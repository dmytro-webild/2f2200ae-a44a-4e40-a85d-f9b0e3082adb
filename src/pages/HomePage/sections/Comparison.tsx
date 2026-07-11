import { motion } from 'motion/react';
import { X, Check, ArrowRight, ArrowDown } from 'lucide-react';
import TextAnimation from '@/components/ui/TextAnimation';

export default function ComparisonSection() {
  const rows = [
    {
      old: "Shared leads sold to 4–5 roofers at once",
      new: "One roofer per market, never shared, never resold"
    },
    {
      old: "You bid against every other roofer in town",
      new: "Homeowners chose you before they booked, no bidding wars"
    },
    {
      old: "Monthly retainer — you pay whether it works or not",
      new: "Pay only when a homeowner shows up, zero retainer"
    },
    {
      old: "You chase, call, and qualify every lead yourself",
      new: "Every appointment qualified and booked to your calendar"
    },
    {
      old: "Tire-kickers and price-shoppers, no filtering",
      new: "Serious homeowners ready to invest, pre-sold on you"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-background" data-webild-section="comparison" id="comparison">
      <div className="w-content-width mx-auto">
        <div className="text-center mb-20">
          <TextAnimation 
            text="WHY ROOFERS SWITCH" 
            variant="fade" 
            gradientText={false}
            className="text-sm font-semibold tracking-widest text-accent uppercase mb-6" 
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            The old way vs. <span className="font-serif italic font-normal">the Brand Konnect way</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {rows.map((row, i) => (
            <motion.div 
              key={i} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: i * 0.1
                  }
                }
              }}
              className="relative border-b border-foreground opacity-90 last:border-0 py-10"
              style={{ borderColor: 'color-mix(in srgb, var(--foreground) 10%, transparent)' }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                
                {/* Left Cell */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex-1 flex items-start gap-4 w-full md:w-auto"
                >
                  <div className="mt-1 flex-shrink-0">
                    <X className="w-5 h-5 text-red-500 opacity-60" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground opacity-50">{row.old}</p>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, x: -10 },
                    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
                  }}
                  className="hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full bg-background-accent text-accent"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
                
                {/* Mobile Arrow */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: -10 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                  }}
                  className="md:hidden flex flex-shrink-0 items-center justify-center text-accent py-2"
                >
                  <ArrowDown className="w-6 h-6" />
                </motion.div>

                {/* Right Cell */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="flex-1 flex items-start gap-4 text-foreground w-full md:w-auto"
                >
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-6 h-6 text-accent drop-shadow-sm" />
                  </div>
                  <p className="text-lg md:text-xl font-medium">{row.new}</p>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}