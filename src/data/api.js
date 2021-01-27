import { API_URL } from '../config'


const apiCall = ({ endpoint, onSuccess = (data) => console.log(data), onError = (err) => console.error(err), method = 'GET', body }) => fetch(`${API_URL}${endpoint}`, {
    method,
    body: JSON.stringify(body),
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
})
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

export const attemptLogin = (body, onSuccess, onError) => apiCall({ endpoint: `/api/login`, body, onSuccess, onError, method: 'POST' })
export const attemptRegister = (body, onSuccess, onError) => apiCall({ endpoint: `/api/register`, body, onSuccess, onError, method: 'POST' })

