import React from "react";
import Link from "next/link";

export default function EventItem({ event }) {
  const { id, title, description, location, date, image } = event;
  console.log(event);
  return (
    <div className="event-card">
      <div className="event-thumbnail">
        <img src={image} alt={description} />
      </div>
      <div className="event-info">
        <div className="event-desc">
          <h3> {title} </h3>
        </div>
        <div className="event-desc">
          {/* Icon */}
          <p> {location}</p>
        </div>
        <div className="event-desc">
          {/* Icon */}
          <p>{date}</p>
        </div>
        <div className="event-link">
          <Link href={`/events/${id}`}> Detail </Link>
        </div>
      </div>
    </div>
  );
}
