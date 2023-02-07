import React from "react";
import "../Simple Weather layout/CurrentWeather";
import WeatherDetail from "../Simple Weather layout/WeatherDetails";

export default function CurrentWeather() {
  return (
    <div className="container">
    <div className="currentWeather">
      <div className="row">
        <div className="col-2">
          <i className="fas fa-wind" />
        </div>
        <div className="col-1 currentTemperature float-left" id="current-temp">
          15
        </div>
        <div className="col-3 temperatureUnit float-left">
          <span className="temperatureUnit">
            <a href="/" id="celsius-degrees" className="active">
              {" "}
              ºC
            </a>
            |
            <a href="/" id="fahrenheit-degrees">
              ºF
            </a>
          </span>
        </div>
        <WeatherDetail />
      </div>
    </div>
    </div>
  );
}
