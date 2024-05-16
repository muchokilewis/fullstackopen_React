import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all';

const getAllOfficialNames = () => {
    const request = axios.get(baseUrl);
    return request.then(response => {
        const officialNames = response.data.map(country => country.name.official);
        return officialNames;
    });
};

export default { getAllOfficialNames };