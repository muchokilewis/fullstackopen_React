import React, { useState, useEffect } from 'react';

// App to get country names from an API
const CountryList = ({countries}) => {

    console.log(countries)

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