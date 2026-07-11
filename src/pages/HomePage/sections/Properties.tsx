// Created by add_section_from_catalog (FeaturesMediaColumns).

import React from 'react';
import FeaturesMediaColumns from '@/components/sections/features/FeaturesMediaColumns';

export default function PropertiesSection(): React.JSX.Element {
  return (
    <div data-webild-section="properties" data-section="properties" id="properties">
      <FeaturesMediaColumns
        title="Meet The Founders"
        items={[{"title":"Kayan Rodriguez ","description":"Co-Founder of Brand Konnect - Tech & Systems - Growth & Strategy - Growth & Strategy","imageSrc":"https://storage.googleapis.com/webild/users/user_3GMBzqNQha0Ss5sANYDh3wTgZ9J/uploaded-1783781452700-7sztti47.jpg"},{"description":"Co-Founder of Brand Konnect - Tech & Systems - Growth & Strategy - Growth & Strategy","imageSrc":"https://storage.googleapis.com/webild/users/user_3GMBzqNQha0Ss5sANYDh3wTgZ9J/uploaded-1783781664123-4zzxj0fq.jpg","title":"Ben Danko "}]}
        description="Built by people who got tired of watching roofers get burned."
        tag="Properties"
        textAnimation="fade-blur"
      />
    </div>
  );
}
