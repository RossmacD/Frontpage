// Export strings : These are the actions that can be run
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const authReducer = (
    state,
    action
) => {
    switch (action.type) {
        case LOGIN:
            console.log(action)
            // Seperate the api_token from the user, add to state
            const { api_token, ...user } = action.payload
            // Set the api token in localstorage
            localStorage.setItem('api_token', api_token)
            return { ...state, auth: true, user }
        case LOGOUT:
            //Remove token from localstorage and clear state
            localStorage.removeItem('api_token')
            return { ...state, auth: false, user: null }
        default:
            console.error("Auth Reducer: Action does not exist", action.type)
            return state;
    }

};