import React from "react";
import EventList from "../components/EventList";
import { getFeaturedEvents } from "../dummy-data";

export default function Homepage() {
  const events = getFeaturedEvents();
  // console.log(events);
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}
