import { profileAPI } from "../api/usersAPI";

const addPost = 'ADD-POST'
const set_profile = 'set-profile'
const set_status = 'set-status'

let initialState = {
    postData: [
        { id: 1, message: "Hi, how are you?", like: 5 },
        { id: 2, message: "It's my first post", like: 6 },
        { id: 3, message: "and my second post", like: 10 }
    ],
    profile: null,
    userStatus: 'Hello',
    
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case addPost: 
            let newPost = {
                id: 4,
                message: action.newPostText,
                like: 0}

            return {...state,
                postData: [...state.postData, newPost],
            }

        case set_profile: 
            return {...state,
                profile: action.profile};

        case set_status: 
            return {...state,
                userStatus: action.userStatus};

        default:
            return state
}}

export const addPostCreate = (newPostText) => ({type: addPost, newPostText})
export const setProfile = (profile) => ({type: set_profile, profile})
export const setStatus = (userStatus) => ({type: set_status, userStatus})

export const getProfile = (user) => {
    return async (dispatch) => {
        const data = await profileAPI.getUser(user);
        
        dispatch(setProfile(data))
    }}

export const getStatus = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(userId)
        
        dispatch(setStatus(data))
    }}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const data = profileAPI.updateStatus(status)

        if (data.resultCode === 0) {
                    dispatch(setStatus(status))}
    }}
   
export default profileReducer