import React from "react";
import EventItem from "./EventItem";

export default function EventList({ events }) {
  console.log(events);
  return (
    <div>
      <h1>Event Lists</h1>
      {events.map((event) => {
        return <EventItem event={event} key={event.id} />;
      })}
    </div>
  );
}
