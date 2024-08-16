import React, { useState, useEffect } from 'react'
import CountryList from '../src/components/countryList'
import CountrySearch from '../src/components/countrySearch'
import Filtered from "./components/Filtered"
import countryService from '../src/services/countries';
import axios from 'axios';

const App = () => {
    const [showCountryList, setShowCountryList] = useState(false)
    const [countries, setCountries] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [filtered, setFiltered] = useState([])

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

      const filterCountries = () => {
        console.log("See")
        const filteredCountries = countries.filter(country => country.toLowerCase().includes(searchQuery.toLowerCase()))
        
        if (filteredCountries.length > 10){
          return "More then 10 countries"
          console.log("More then 10 countries")
        }
        else {
          setFiltered(filteredCountries) // Set the filtered
          console.log(filteredCountries.length)
          console.log(filteredCountries)
        }
      }

      const handleInputChange = (event) => {
        // console.log(event)
        const query = event
        setSearchQuery(query)
    
        if (query.length > 0){
          filterCountries()
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
                filtered={filtered}
            />
            {/* <Filtered filterCountries={() => filterCountries()} /> */}
        </div>
       
    )
}

export default App;