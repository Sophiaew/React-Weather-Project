import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-sm">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=17bcfd67e085423bef87d025a6a15b1b&units=metric;`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
