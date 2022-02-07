import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-md-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Monday 11:14</li>
        <li>Light rain showers</li>
      </ul>
      <div className="row">
        <div className="col-md-6">
          <img
            alt="Light rain showers"
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
          />
          6°
        </div>
        <div className="col-md-6">
          <ul>
            <li>Precipitation: 59% </li>
            <li>Humidity: 94% </li>
            <li>Wind: 8 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
