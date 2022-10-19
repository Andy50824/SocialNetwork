import { userAPI } from "../api/usersAPI";

const addPost = 'ADD-POST'
const updatePost = 'UPDATE-POST'
const set_profile = 'set-profile'

let initialState = {
    postData: [
        { id: 1, message: "Hi, how are you?", like: 5 },
        { id: 2, message: "It's my first post", like: 6 },
        { id: 3, message: "and my second post", like: 10 }
    ],
    newPostText: '',
    profile: null,
    
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case addPost: 
            let newPost = {
                id: 4,
                message: state.newPostText,
                like: 0}

            return {...state,
                postData: [...state.postData, newPost],
                newPostText: ('')
            }
  
        case updatePost: 
            return {...state,
                newPostText: action.updateData};
        
        case set_profile: 
            return {...state,
                profile: action.profile};

        default:
            return state
}}

export const addPostCreate = () => ({type: addPost})
export const setProfile = (profile) => ({type: set_profile, profile})
export const updatePostCreate = (text) => ({
    type: updatePost, updateData: text})

export const getProfile = (user) => {
    return (dispatch) => {
        userAPI.getUser(user).then(  
            data => {
                dispatch(setProfile(data))
            })
    }}

export default profileReducer