import { auth } from './authReducer'

const initialize_Success = 'LOGIN-SUCCESS'


let initialState = {
    initialStatus: false,
}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case initialize_Success: 
            return {
                ...state,
                initialStatus: true
            }
        default:
            return state
}}

export const initializeSuccess = () => ({type: initialize_Success})



export const initializeApp = () => (dispatch) => {
        let promise = dispatch(auth())

        Promise.all([promise]).then( () => {
            dispatch(initializeSuccess())}
        )
    }


export default appReducer