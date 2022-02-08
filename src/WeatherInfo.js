import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="d-flex">
            <img
              alt={props.data.description}
              className="float-left"
              src={props.data.icon}
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
