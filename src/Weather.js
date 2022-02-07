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
              placeholder="Type a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-md-3">
            <input
              type="submit"
              value="Search"
              className="btn w-100 btn-primary"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Monday 11:14</li>
        <li>Light rain showers</li>
      </ul>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="d-flex">
            <img
              alt="Light rain showers"
              className="float-left"
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            />
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
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
