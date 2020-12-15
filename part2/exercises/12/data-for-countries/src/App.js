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

const CountryListItem = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowButton = () => { setShowInfo(!showInfo); };

  if (!showInfo) {
    return (
      <div>
        {country.name}
        <button onClick={handleShowButton}>{showInfo ? "Hide" : "Show"}</button>
      </div>
    );
  }

  return (
    <div>
      {country.name}
      <button onClick={handleShowButton}>{showInfo ? "Hide" : "Show"}</button>
      <Country country={country} />
    </div>
  );
};

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} width="200" alt="Country flag" />
      <Weather cityName={country.capital} />
    </div>
  );
};

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => { setCountries(response.data); })
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const displayCountries = () => {
    let loweCaseFilter = filter.toLowerCase();
    let result = countries.filter(country => {
      return country.name.toLowerCase().includes(loweCaseFilter);
    });
    if (result.length > 10) {
      return <p>Too many matches, specify another filter.</p>;
    } else if (result.length > 1) {
      return result.map(country => {
        return <CountryListItem key={country.name} country={country} />;
      });
    } else if (result.length === 1) {
      return <Country country={result[0]} />;
    }
  };

  return (
    <div>
      Find Countries: <input value={filter} onChange={handleFilterChange} />
      {displayCountries()}
    </div>
  );
};

export default App;
