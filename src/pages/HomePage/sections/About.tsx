// Created by add_section_from_catalog (AboutTextFill).

import React from 'react';
import AboutCursorTrail from '@/components/sections/about/AboutCursorTrail';

export default function AboutSection(): React.JSX.Element {
  return (
    <div data-webild-section="about" data-section="about" id="about">
      <AboutCursorTrail
        tag="About"
        title="For those who travel like it's an art form."
        media={[
          { imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/about/statement.webp" },
          { imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-1.webp" },
          { imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-2.webp" },
          { imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-3.webp" },
          { imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-4.webp" }
        ]}
        primaryButton={{ text: "Book a Tour", href: "#contact" }}
        secondaryButton={{ text: "View Properties", href: "#properties" }}
        textAnimation="slide-up"
      />
    </div>
  );
}