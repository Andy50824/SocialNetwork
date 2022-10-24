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
// export const updatePostCreate = (text) => ({
//     type: updatePost, updateData: text})

export const getProfile = (user) => {
    return (dispatch) => {
        profileAPI.getUser(user).then(  
            data => {
                dispatch(setProfile(data))
            })
    }}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(  
            data => {
                dispatch(setStatus(data))
            })
    }}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(  
            data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))}
            })
    }}
   
export default profileReducer