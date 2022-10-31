import { stopSubmit } from "redux-form"
import {authAPI} from "../api/usersAPI"

const set_Auth_User = 'SET-AUTH-USER'


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case set_Auth_User: 
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
}}

export const setAuthUser = (userId, login, email, isAuth) => ({
    type: set_Auth_User, payload: {userId, login, email, isAuth}})



export const auth = () => {
    return async (dispatch) => {
        const response = await authAPI.getAuth(); 

        if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUser(id, login, email, true))}
          }}


export const login = (email, password, rememberMe) => {

    return async (dispatch) => {

    const data = await authAPI.getLogin(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(auth())} 
    else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error" 
        dispatch(stopSubmit("Login", {_error: message}))}
    }}

export const logout = () => {
    return async (dispatch) => {
        const data = await authAPI.getLogout()
        
        if (data.resultCode === 0) {
            dispatch(setAuthUser(null, null, null, false))} 
    }}

export default authReducer