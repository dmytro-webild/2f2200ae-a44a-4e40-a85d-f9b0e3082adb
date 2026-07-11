// Created by add_section_from_catalog (FeaturesTimelineCards).

import React from 'react';
import FeaturesTimelineCards from '@/components/sections/features/FeaturesTimelineCards';

export default function ProcessSection(): React.JSX.Element {
  return (
    <div data-webild-section="process" data-section="process" id="process">
      <FeaturesTimelineCards
        textAnimation="fade-blur"
        tag="Our Process"
        title="You Show Up. We Handle The Rest."
        items={[{"description":"Ready homeowners in your market, positioned to see you as the premium name. Never one of five bids. The one they came for.","imageSrc":"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","title":"01 — We Make You The Only Choice"},{"title":"02 — We Pre-Sell Them On You","description":"Every follow-up, handled. They reach your calendar already knowing your name, your work, your vision. Sold before they show.","imageSrc":"https://images.unsplash.com/photo-1600607687931-cebf0746e50e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},{"description":"No cold-calling. No chasing. Just a homeowner who booked themselves in. Sit down and win the job.","imageSrc":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","title":"03 — You Show Up And Close"}]}
        description="No lists to chase. No bidding wars. Just homeowners who already chose you — before they ever booked."
      />
    </div>
  );
}
