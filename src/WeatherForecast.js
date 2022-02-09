import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lon = `${props.lon}`;
  let lat = `${props.lat}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=17bcfd67e085423bef87d025a6a15b1b&units=metric;`;
  axios.get(apiUrl).then(handleResponse);
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
