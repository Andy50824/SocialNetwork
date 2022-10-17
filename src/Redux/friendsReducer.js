const follow = 'FOLLOW'
const unfollow = 'UNFOLLOW'
const setUsers = 'set-users'

let initialState = {
    friendsData : [
            // { id: 0, photo: "https://n1s1.starhit.ru/21/14/0f/21140faff86c838fee9be269ecf7ec6a/444x460_0_e9c32402f32ce8945f0a70822bcd96d1@480x497_0xac120003_9628850541597396477.jpg",
            //     status: "I'm locking for a job", name: "Dima", followed: true, location: {cityName: "Moscow", country: "Russia"} },
            // { id: 1, photo: "https://n1s1.starhit.ru/21/14/0f/21140faff86c838fee9be269ecf7ec6a/444x460_0_e9c32402f32ce8945f0a70822bcd96d1@480x497_0xac120003_9628850541597396477.jpg",
            //     status: "I'm a student", name: "Sasha", followed: false, location: {cityName: "Minsk", country: "Belarus"} },
            // { id: 2, photo: "https://n1s1.starhit.ru/21/14/0f/21140faff86c838fee9be269ecf7ec6a/444x460_0_e9c32402f32ce8945f0a70822bcd96d1@480x497_0xac120003_9628850541597396477.jpg",
            //     status: "I'm a traveler", name: "pasha", followed: true, location: {cityName: "Kiev", country: "Ukraine"} }
    ]}

const friendsReducer = (state=initialState, action) => {
    switch (action.type) {
        case follow:
            return {...state,
                friendsData: state.friendsData.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: true}
                    }
                    return f
                })}
        case unfollow:
            return {...state,
                friendsData: state.friendsData.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: false}
                    }
                    return f
                })} 
        case setUsers: {
            return {...state,
                friendsData: [...state.friendsData, ...action.friends]} }  

        default:
            return state
}}

export const changeToFollow = (userId) => ({type: follow, userId})
export const changeToUnfollow = (userId) => ({type: unfollow, userId})
export const setUsersForm = (friends) => ({type: setUsers, friends})

export default friendsReducer