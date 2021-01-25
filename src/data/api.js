import { API_URL } from '../config'


const apiCall = ({ endpoint, onSuccess = (data) => console.log(data), onError = (err) => console.error(err) }) => fetch(`${API_URL}${endpoint}`)
    .then(response => {
        if (response.status === 200) { return response.json() }
        console.error(response)
        throw new Error('Invalid Response')
    })
    .then(onSuccess)
    .catch(onError)


export const getCategories = (onSuccess) => {
    apiCall({ endpoint: `/api/categories`, onSuccess })
}

export const getArticles = (onSuccess) => {
    apiCall({ endpoint: `/api/articles`, onSuccess })
}