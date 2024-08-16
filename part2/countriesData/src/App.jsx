import React, { useState, useEffect } from 'react'
import CountryList from '../src/components/countryList'
import CountrySearch from '../src/components/countrySearch'
import countryService from '../src/services/countries';
import axios from 'axios';

const App = () => {
    const [showCountryList, setShowCountryList] = useState(false)
    const [countries, setCountries] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        countryService.getAllOfficialNames()
            .then(countries => setCountries(countries))
            .catch(error => console.log('Error fetching countries:', error));
    }, []);

    const handleClick = () => {
        setShowCountryList(!showCountryList)
    }

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
      }

      const handleInputChange = (event) => {
        console.log(event)
        const query = event
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
            <a href='#' onClick={handleClick}>Show List of Countries</a>
            {showCountryList && <CountryList countries={countries} />}
            <CountrySearch 
                searchQuery={searchQuery}
                handleInputChange={(event) => handleInputChange(event)}
                handleSearch={handleSearch}
                selectedCountry={selectedCountry}
                setSearchQuery={setSearchQuery}

            />
        </div>
       
    )
}

export default App;