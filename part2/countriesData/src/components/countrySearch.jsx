import React, { useState } from 'react';
import axios from 'axios';

const CountrySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${searchQuery}`);
      const data = response.data;

      if (data.length > 10) {
        alert('More than 10 countries available. Be more specific')
      } else {
        setCountries(data);
        setSelectedCountry(data) // Set the first country as the selected country
      }
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(selectedCountry.flags.png)
  // console.log(countries)

  const handleInputChange = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    if (query.length > 0){
      handleSearch()
    } else {
      setCountries([])
      setSelectedCountry(null)
    }
  }

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>

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