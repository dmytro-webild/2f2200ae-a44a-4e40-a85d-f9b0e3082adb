// Created by add_section_from_catalog (AboutTextFill).

import React from 'react';
import AboutTextFill from '@/components/sections/about/AboutTextFill';

export default function AboutSection(): React.JSX.Element {
  return (
    <div data-webild-section="about" data-section="about" id="about">
      <AboutTextFill
        videoSrc=""
        imageSrc="https://storage.googleapis.com/webild/default/templates/marbella/about/statement.webp"
        title="For those who travel like it's an art form."
        textAnimation="slide-up"
      />
    </div>
  );
}
