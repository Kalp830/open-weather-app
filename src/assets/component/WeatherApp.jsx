import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const API_KEY = "c87befeb7ef46c45c080a8296ab9b371";

  useEffect(() => {
  

    const fetchWeather = async () => {
      try {
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(weatherResponse.data);

        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );

        const dailyData = forecastResponse.data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(dailyData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="appContainer">
      <div className="appInner">
        <input
          type="text"
          placeholder="Enter City Name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {weather && (
          <div className="card current-weather flex justify-content-center">
            <h1>{weather.name}</h1>
            <h2>{weather.main.temp.toFixed(1)}°C</h2>
            <p>{weather.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          </div>
        )}

        {forecast.length > 0 && (
          <div className="forecast-container">
            <h2 className="forecast-title my-3 text-white">5-Day Forecast</h2>
            <div className="forecast-grid">
              {forecast.map((day, index) => (
                <div key={index} className="card forecast-card ">
                  <p className="date">
                    {new Date(day.dt_txt).toLocaleDateString()}
                  </p>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt="Forecast Icon"
                  />
                  <p className="temp">{day.main.temp.toFixed(1)}°C</p>
                  <p className="desc">{day.weather[0].description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
