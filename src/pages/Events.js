import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Events.css";

const Events = () => {
  // Event list including past and upcoming events
  const events = [
    { title: "The Power of Self-Belief: Turning Dreams Into Reality", date: "2025-03-04" },
    { title: "3 Days Workshop on REVIT", date: "2025-03-10" },
    { title: "COMPETITIVE CODING WORKSHOP", date: "2025-03-21" },
    { title: "PROF. ANURANJ MEMORIAL TROPHY – Intra-College Cricket Tournament", date: "2025-02-14" },
    { title: "ARANGU - Annual Cultural Fest", date: "2025-03-28" }, // Upcoming event to track
    { title: "ACCTHPA – 2025", date: "2025-07-18" }
  ];

  // Get today's date
  const today = moment().format("YYYY-MM-DD");

  // Filter only upcoming events
  const upcomingEvents = events.filter(event => event.date >= today);

  // Find 'ARANG' event for countdown
  const arangEvent = upcomingEvents.find(event => event.title.includes("ARANG"));

  // Countdown state
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    if (arangEvent) {
      const interval = setInterval(() => {
        const eventDate = moment(arangEvent.date);
        const now = moment();
        const duration = moment.duration(eventDate.diff(now));

        // Fixed string interpolation using template literals
        setCountdown(
          `${duration.days()}d ${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [arangEvent]);

  return (
    <div className="event-container">
      <h1>🎉 Upcoming College Events</h1>

      {arangEvent && (
        <div className="next-event">
          <h2>⏳ Countdown to: {arangEvent.title}</h2>
          <p className="countdown">Starts in: {countdown}</p>
        </div>
      )}

      <div className="event-list">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-date">
              <span>{moment(event.date).format("ddd")}</span>
              <br />
              {moment(event.date).format("MMM DD")}
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{moment(event.date).format("dddd, MMMM DD, YYYY")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
