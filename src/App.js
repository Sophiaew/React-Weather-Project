import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Sophiaew/React-Weather-Project"
          >
            open source
          </a>
        </footer>
      </div>
    </div>
  );
}
