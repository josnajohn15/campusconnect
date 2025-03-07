import React from "react";
import moment from "moment";
import "./Announcements.css";

const Announcements= () => {
  // List of announcements
  const announcements = [
    { title: "Semester Exams Schedule Released", date: "2025-03-05", type: "📅" },
    { title: "New Library Timings Announced", date: "2025-03-01", type: "📚" },
    { title: "Internship Fair 2025 - Registrations Open", date: "2025-03-10", type: "💼" },
    { title: "Annual Sports Meet - Registration Deadline", date: "2025-03-15", type: "🏆" },
    { title: "Campus Placement Drive - Infosys & TCS", date: "2025-03-20", type: "🚀" },
  ];

  // Sort announcements by date (latest first)
  const sortedAnnouncements = announcements.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="announcement-container">
      <h1>📢 Important Announcements</h1>

      <div className="announcement-grid">
        {sortedAnnouncements.map((announcement, index) => (
          <div key={index} className="announcement-card">
            <div className="announcement-header">
              <span className="announcement-icon">{announcement.type}</span>
              <h3>{announcement.title}</h3>
            </div>
            <div className="announcement-footer">
              <p>{moment(announcement.date).format("dddd, MMMM DD, YYYY")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;