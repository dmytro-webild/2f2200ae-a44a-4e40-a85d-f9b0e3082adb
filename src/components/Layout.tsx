import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarFullscreenStatic from "@/components/ui/NavbarFullscreenStatic";
import FooterBasic from "@/components/sections/footer/FooterBasic";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarFullscreenStatic
                logo="Brand Konnect"
                navItems={[]}
                ctaButton={{ text: "", href: "" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="w-full py-24 bg-background">
        <div className="w-content-width mx-auto flex flex-col items-center justify-center text-center gap-8">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Follow Us & See What We Are Building</h2>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/teambrandkonnect" target="_blank" rel="noopener noreferrer" className="text-lg text-accent hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="https://www.youtube.com/@Brand-Konnect" target="_blank" rel="noopener noreferrer" className="text-lg text-accent hover:text-foreground transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </StyleProvider>
  );
}
