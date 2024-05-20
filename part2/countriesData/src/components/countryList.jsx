import React, { useState, useEffect } from 'react';
import countryService from '../services/countries';

// App to get country names from an API
const CountryList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        countryService.getAllOfficialNames()
            .then(countries => setCountries(countries))
            .catch(error => console.log('Error fetching countries:', error));
    }, []);

    return (
        <div>
            <h1>List of Countries</h1>
            <ul>
                {countries.map((country, index) => (
                    <li key={index}>{country}</li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;