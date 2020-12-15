import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryListItem from './components/CountryListItem';
import Country from './components/Country';

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
