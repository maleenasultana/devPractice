import React from "react";
import "../Simple Weather layout/DayInfo";

export default function DayInfo() {
  return (
    <div className="dayInfo">
      <h4>
        <span className="greeting" id="greeting-phrase">
          Good Afternoon,
        </span>
        <span className="city" id="city-identification">
          {" "}
          Lisbon.
        </span>
      </h4>
      <h6 className="timeDate" id="current-date-time">
        Last updated at: sunday, 19:00
      </h6>
      <h6 className="weatherStatus" id="weather-stat">
        Windy
      </h6>
    </div>
  );
}
