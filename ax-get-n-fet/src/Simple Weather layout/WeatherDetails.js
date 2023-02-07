import React from "react";
import "../Simple Weather layout/WeatherDetails";

export default function WeatherDetail() {
  return (
    <div className="col-6 float-left">
      <h6 className="pressure">
        Pressure: <span id="pressure" /> 1044 mb
      </h6>
      <h6 className="humidity">
        Humidity: <span id="humidity" />
        90%
      </h6>
      <h6 className="wind">
        Wind: <span id="wind" /> 40 km/h
      </h6>
    </div>
  );
}
