// Created by add_section_from_catalog (FeaturesBorderGlow).

import React from 'react';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';

export default function ProcessSection(): React.JSX.Element {
  return (
    <div data-webild-section="process" data-section="process" id="process">
      <FeaturesBorderGlow
        title="You Show Up. We Handle The Rest."
        textAnimation="fade-blur"
        features={[{"icon":"Target","description":"Ready homeowners in your market, positioned to see you as the premium name. Never one of five bids. The one they came for.","title":"01. We Make You The Only Choice"},{"icon":"MessageSquare","description":"Every follow-up, handled. They reach your calendar already knowing your name, your work, your vision. Sold before they show.","title":"02. We Pre-Sell Them On You"},{"icon":"Handshake","description":"No cold-calling. No chasing. Just a homeowner who booked themselves in. Sit down and win the job.","title":"03. You Show Up And Close"}]}
        description="No lists to chase. No bidding wars. Just homeowners who already chose you — before they ever booked."
        tag="Our Process"
      />
    </div>
  );
}
