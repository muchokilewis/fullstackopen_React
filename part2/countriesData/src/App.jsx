import React, { useState, useEffect } from 'react';
import CountryList from '../src/components/countryList'
import CountrySearch from '../src/components/countrySearch'
const App = () => {
    const [showCountryList, setShowCountryList] = useState(false)

    const handleClick = () => {
        setShowCountryList(true)
    }

    return (
        <div>
            <a href='#' onClick={handleClick}>Show List of Countries</a>
            {showCountryList && <CountryList />}
        </div>
       
    )
}

export default App;