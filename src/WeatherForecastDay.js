import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecaseDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temp">
        <p>
          <span className="WeatherForecast-temp-max">{maxTemperature()}</span>{" "}
          <span className="WeatherForecast-temp-min">{minTemperature()}</span>
        </p>
      </div>
    </div>
  );
}
