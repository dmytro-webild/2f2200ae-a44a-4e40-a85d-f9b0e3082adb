// Created by add_section_from_catalog (HeroBillboard).

import React from 'react';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';

export default function AboutSection(): React.JSX.Element {
  return (
    <div data-webild-section="about" data-section="about" id="about">
      <HeroBillboard
        tag="A"
        title="
Everything before the handshake is ours. The handshake is yours."
        description="Elevating roofing business to next level."
        imageSrc=""
        primaryButton={{ text: "Book a Call", href: "#contact" }}
        secondaryButton={{ text: "Our Services", href: "#services" }}
        textAnimation="fade-blur"
      />
    </div>
  );
}