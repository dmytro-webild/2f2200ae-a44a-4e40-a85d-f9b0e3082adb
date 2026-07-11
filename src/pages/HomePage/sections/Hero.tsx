// Created by add_section_from_catalog (HeroWorkScrollStack).

import React from 'react';
import HeroWorkScrollStack from '@/components/sections/hero/HeroWorkScrollStack';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroWorkScrollStack
        primaryButton={{"href":"#contact","avatarSrc":"https://storage.googleapis.com/webild/default/templates/marbella/agent.webp","text":"Book a Tour","avatarLabel":"Speak with an agent"}}
        titleHighlight="like it's an art form."
        description="Handpicked residences in Marbella's most coveted locations."
        descriptionMuted="Each designed for effortless Mediterranean living."
        items={[{"imageSrc":"https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-1.webp","description":"A sunlit 5-bedroom retreat with infinity pool, panoramic sea views, and private garden terraces.","tag":"Marbella","title":"Villa Serena"},{"tag":"Puerto Banús","title":"Casa del Sol","imageSrc":"https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-2.webp","description":"Contemporary beachfront living with floor-to-ceiling glass, rooftop lounge, and direct beach access."},{"description":"Traditional charm meets modern luxury — courtyard, olive grove, and a heated outdoor pool.","imageSrc":"https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-3.webp","title":"Villa Andalucía","tag":"Golden Mile"}]}
        sectionTitle="Our Villas"
        title="For those who travel"
        sectionTag="Properties"
        sectionDescription="Exclusive listings in Marbella."
        tag="Premium Real Estate"
        textAnimation="slide-up"
      />
    </div>
  );
}
