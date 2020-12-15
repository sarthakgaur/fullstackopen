import React, { useState } from 'react';
import Country from './Country';

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

export default CountryListItem;
