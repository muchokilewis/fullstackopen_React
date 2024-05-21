// import React, { useState } from 'react';
// import axios from 'axios';

// const CountrySearch = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [countries, setCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null)

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${searchQuery}`);
//       const data = response.data;

//       if (data.length > 10) {
//         alert('More than 10 countries available. Be more specific')
//       } else {
//         setCountries(data);
//         setSelectedCountry(data)
//       }
//     } catch (error) {
//       console.error(error);
//     }
//     // console.log(countries.name.common)
//     console.log(selectedCountry.languages)
//   };

//   const handleSelectedCountry = (country) => {
//     setSelectedCountry(country)
//   }

//   return (
//     <div>
//       <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>

//       {selectedCountry &&
//         <h2>{selectedCountry.name.common}</h2> &&
//         // <p>capital {selectedCountry.capital}</p>
//         // <p><b>Languages: </b></p>
//         <ul>
//           {selectedCountry.languages}
//         </ul>
        
        
//     }
//     </div>
//   )
// }

// export default CountrySearch;


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

      // console.log(data)

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

  const handleSelectedCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
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
  );
};

export default CountrySearch;