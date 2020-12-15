import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const Weather = ({ cityName }) => {
  const [weather, setWeather] = useState(null);
  let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`;

  useEffect(() => {
    axios.get(url)
      .then(response => { setWeather(response.data); })
  }, [url]);

  if (weather?.current) {
    return (
      <div>
        <h2>Weather in {cityName}</h2>
        <p>Temperature: {weather.current.temperature}</p>
        <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions} />
        <p>Wind: {weather.current.wind_speed} MPH, Direction {weather.current.wind_dir}</p>
      </div>
    );
  }

  return null;
};

export default Weather;
