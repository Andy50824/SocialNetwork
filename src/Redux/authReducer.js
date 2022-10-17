const set_Auth_User = 'SET-AUTH-USER'
const get_Auth_Date = 'GET-AUTH-DATA'


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    authData: null
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case set_Auth_User: 
            return {
                ...state,
                ...action.data,
                isAuth: true}
        case get_Auth_Date : 
        return {
            ...state,
            authData: {...action.authData}}
        default:
            return state
}}

export const setAuthUser = (userId, login, email) => ({
    type: set_Auth_User, data: {userId, login, email}})

export const getAuthData = (authData) => ({
    type: get_Auth_Date, authData: authData})

export default authReducer