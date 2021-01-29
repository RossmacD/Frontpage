import { API_URL } from '../config'
const authHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem('api_token')}`
})

const apiCall = ({ endpoint, onSuccess = (data) => console.log(data), onError = (err) => console.error(err), method = 'GET', body, headers = {} }) => fetch(`${API_URL}${endpoint}`, {
    method,
    body: JSON.stringify(body),
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers
    }
})
    .then(response => {
        if (response.status === 200 || response.status === 201) { return response.json() }
        console.error(response)
        throw new Error('Invalid Response')
    })
    .then(onSuccess)
    .catch(onError)


export const getCategories = (onSuccess) => {
    apiCall({ endpoint: `/api/categories`, onSuccess })
}


export const attemptLogin = (body, onSuccess, onError) => apiCall({ endpoint: `/api/login`, body, onSuccess, onError, method: 'POST' })
export const attemptRegister = (body, onSuccess, onError) => apiCall({ endpoint: `/api/register`, body, onSuccess, onError, method: 'POST' })


export const getArticles = (onSuccess) => {
    apiCall({ endpoint: `/api/articles`, onSuccess })
}


export const createArticle = (body, onSuccess, onError) => apiCall({
    endpoint: `/api/articles`, body, onSuccess, onError, method: 'POST', headers: authHeaders()
})
export const getArticle = (articleID, onSuccess, onError) => apiCall({
    endpoint: `/api/articles/${articleID}`,
    onSuccess,
    onError
})

export const editArticle = (articleID, body, onSuccess, onError) => apiCall({
    endpoint: `/api/articles/${articleID}`, body, onSuccess, onError, method: 'PUT', headers: authHeaders()
})


export const getComments = (onSuccess) => {
    apiCall({ endpoint: `/api/comments`, onSuccess })
}

export const createComment = (body, onSuccess, onError) => apiCall({
    endpoint: `/api/comments`, body, onSuccess, onError, method: 'POST', headers: authHeaders()
})

export const getComment = (articleID, onSuccess, onError) => apiCall({
    endpoint: `/api/comments/${articleID}`,
    onSuccess,
    onError
})