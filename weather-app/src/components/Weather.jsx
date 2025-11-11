import React from "react";
import "./Weather.css";
import cloud from "../assets/cloud.png";
import rain from "../assets/rain.png";
import clear from "../assets/clear.png";
import wind from "../assets/wind.png";

function Weather({ data }) {
  const main = data.weather[0].main.toLowerCase();
  let weatherIcon = clear;

  if (main.includes("cloud")) weatherIcon = cloud;
  else if (main.includes("rain")) weatherIcon = rain;

  return (
    <div className="weather-card">
      <img src={weatherIcon} alt="weather" className="weather-icon" />
      <h1>{Math.round(data.main.temp)}°C</h1>
      <h2>{data.name}</h2>

      <div className="details">
        <div className="col">
          <img src={rain} alt="humidity" />
          <p>{data.main.humidity}%</p>
          <span>Humidity</span>
        </div>
        <div className="col">
          <img src={wind} alt="wind" />
          <p>{data.wind.speed} Km/h</p>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
