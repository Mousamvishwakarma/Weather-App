import React, { useState } from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "YOUR_API_KEY"; // ⚠️ apna OpenWeatherMap API key daalna

  const fetchWeather = async () => {
    if (!city) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert("City not found!");
        setWeatherData(null);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="app">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>
          <i className="fa fa-search"></i>
        </button>
      </div>

      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
