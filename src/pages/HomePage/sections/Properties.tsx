// Created by add_section_from_catalog (FeaturesMediaColumns).

import React from 'react';
import FeaturesMediaColumns from '@/components/sections/features/FeaturesMediaColumns';

export default function PropertiesSection(): React.JSX.Element {
  return (
    <div data-webild-section="properties" data-section="properties" id="properties">
      <FeaturesMediaColumns
        title="Our Villas"
        items={[{"description":"A sunlit 5-bedroom retreat with infinity pool, panoramic sea views, and private garden terraces.","imageSrc":"https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-1.webp","title":"Villa Serena"},{"imageSrc":"https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-2.webp","description":"Contemporary beachfront living with floor-to-ceiling glass, rooftop lounge, and direct beach access.","title":"Casa del Sol"},{"description":"Traditional charm meets modern luxury — courtyard, olive grove, and a heated outdoor pool.","imageSrc":"https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-3.webp","title":"Villa Andalucía"},{"title":"The Meridian","description":"Sleek 4-bedroom penthouse villa with smart home technology and sweeping coastal views.","imageSrc":"https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-4.webp"},{"title":"Villa Blanca","imageSrc":"https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-5.webp","description":"Minimalist white-washed estate with private cinema, spa suite, and landscaped Mediterranean gardens."},{"imageSrc":"https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-6.webp","description":"Golden-hour perfection — west-facing terraces, wine cellar, and an open-plan chef's kitchen.","title":"Casa Dorada"}]}
        description="Handpicked residences in Marbella's most coveted locations, each designed for effortless Mediterranean living."
        tag="Properties"
        textAnimation="fade-blur"
      />
    </div>
  );
}
