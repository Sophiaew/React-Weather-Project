import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-sm">
          <div className="WeatherForecast-day">Thursday</div>
          <WeatherIcon code={`04d`} size={36} />
          <div className="WeatherForecast-temp">
            <p>
              <span className="WeatherForecast-temp-max">19°</span>{" "}
              <span className="WeatherForecast-temp-min">10°</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
