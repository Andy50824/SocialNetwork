const followAC = 'FOLLOW'
const unfollowAC = 'UNFOLLOW'
const setUsersAC = 'set-users'
const setPageAC = 'set-page'
const setTotalAC = 'set-total-users'
const following_in_progress = 'following-in-progress'

let initialState = {
    usersData: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 4,
    currentUserId: 1,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case followAC:
            return {...state, usersData: state.usersData.map( u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
            })}

        case unfollowAC:
            return {...state, usersData: state.usersData.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
            })
            }
        case setUsersAC:
            return {...state, 
                usersData: [...action.users]}
        case setPageAC:
            return {...state, 
                currentPage: action.page} 
        case setTotalAC:
            return {...state, 
                totalCount: action.total}
        case following_in_progress:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
}}

export const follow = (userId) => ({type: followAC, userId})
export const unfollow = (userId) => ({type: unfollowAC, userId})
export const setUsers = (users) => ({type: setUsersAC, users})
export const setPage = (page) => ({type: setPageAC, page})
export const setTotal = (total) => ({type: setTotalAC, total})
export const toggleFollowingProgress = (isFetching, userId) => 
({type: following_in_progress, isFetching, userId})

export default usersReducer