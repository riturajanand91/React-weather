import React, { useEffect, useState } from 'react';
import { fetchData } from './api/httpClient';
import "./App.css";

const App = () => {
  const [location, setLocation] = useState('delhi');
  const [weatherInfo, setWeatherInfo] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(location);
    const weather = await fetchData(location);
    setWeatherInfo(weather);
  }
  return (
    <div className="container">
      <div className="weather-container">
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search"
              placeholder="search"
              value={location}
              id="search-input"
              onChange={(e) => setLocation(e.target.value)}
            />
            <button id="search-btn">Search</button>
          </form>
        </div>
        {weatherInfo.main && (
          <div>
            <div className="output-panel">
              <div className="city-panel">
                <div className="temperature">
                  <h1><span className="js-temp" id="city-temp"></span><span className="unit">{weatherInfo.main.temp}C</span></h1>
                  <p>Temperature</p>
                </div>
                <div className="city">
                  <h2><span id="city-name">{weatherInfo.name} / {weatherInfo.sys.country}</span></h2>
                  <p>City</p>
                </div>
              </div>
            </div>
            <div className="output-panel">
              <div className="weather-panel">
                <div className="humidity">
                  <h1><span id="humidity-level"></span>{weatherInfo.main.humidity}%</h1>
                  <p>Humidity</p>
                </div>
                <div className="temperature-panel">
                  <div className="min-max-temp">
                    <div className="temperature-box">
                      <h2><span className="js-temp" id="min-temp"></span><span className="unit">{weatherInfo.main.temp_max}C</span></h2>
                      <p>Min.</p>
                    </div>
                    <div className="temperature-box">
                      <h2><span className="js-temp" id="max-temp"></span><span className="unit">{weatherInfo.main.temp_min}C</span></h2>
                      <p>Max.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App