// Created by add_section_from_catalog (HeroBillboard).

import React from 'react';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';

export default function AboutSection(): React.JSX.Element {
  return (
    <div data-webild-section="about" data-section="about" id="about">
      <HeroBillboard
        tag="About Us"
        title="We're not another lead vendor."
        description="Elevating roofing businesses with strategic growth partnerships, tailored marketing, and operational excellence."
        imageSrc=""
        primaryButton={{ text: "Book a Call", href: "#contact" }}
        secondaryButton={{ text: "Our Services", href: "#services" }}
        textAnimation="fade-blur"
      />
    </div>
  );
}