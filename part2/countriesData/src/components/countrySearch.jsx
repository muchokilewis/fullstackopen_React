import React, { useState } from 'react';
import axios from 'axios';

const CountrySearch = ({ searchQuery, handleInputChange, handleSearch, selectedCountry}) => {

  return (
    <div>
      <input type="text" value={searchQuery} onChange={(e) => handleInputChange(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <p>{searchQuery}</p>

      {selectedCountry && (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital[0]}</p>
          <p>Area {selectedCountry.area}</p>
          <p>Languages:</p>
          <ul>
            {Object.entries(selectedCountry.languages).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
          <img src={selectedCountry.flags.png} alt={selectedCountry.flags.alt} />
        </div>
      )}


    </div>

  )
}

export default CountrySearch;