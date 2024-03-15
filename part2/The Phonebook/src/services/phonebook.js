import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        // console.log(response.data)
        return response.data
    })
}

const create = (noteObject) => {
    const request = axios.post(baseUrl, noteObject)
    return request.then(response => {
        // console.log(response.data)
        return response.data
    })
}

const deleteContact = (id, name) => {
    const request = axios. delete(`${baseUrl}/${id}`)
    return request.then(response => {
        return response.data
    })
}

export default { getAll, create, deleteContact }