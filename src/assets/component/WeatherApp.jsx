import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState();
  const [weather, setweather] = useState();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"c87befeb7ef46c45c080a8296ab9b371"}`
      );
      setweather(response);
    } catch (error) {
      console.log("Error fetching weather data", error);
    }
  };

  const handleGetWeather = () => {
    fetchWeather();
  };
  return (
    <>
      <div className="appContainer">
        <div className="appInner">
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={handleCityChange}
          />
          <button className="getWeatherBtn" onClick={handleGetWeather}>
            Get Weather
          </button>
          {weather && (
            <>
              <div className="weather-info">
                <h1>{weather.data.name}</h1>
                <h4>Temprature is {weather.data.main.temp}c</h4>
                <p>{weather.data.weather[0].description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
