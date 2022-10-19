const add_Message = 'ADD-MESSAGE'
const update_Message = 'UPDATE-MESSAGE'

let initialState = {
    messageData : [
        { id: 0, message: 'Hello' },
        { id: 1, message: 'How are you' },
        { id: 2, message: 'Yo' }
    ],
    updateMessage: '',

    dialogsData : [
        { id: 0, name: "Sergey" },
        { id: 1, name: "Andrey" },
        { id: 2, name: "Grisha" },
        { id: 3, name: "Masha" },
        { id: 4, name: "Dasha" }
    ]
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case add_Message: 
            let newMessage = {
                id: 3,
                message: state.updateMessage,};
            return {...state,
                messageData: [...state.messageData, newMessage],
                updateMessage: ''}
            
        case update_Message: 
            return {...state,
                updateMessage: action.message}
        default:
            return state
}}

export const addMessage = () => ({type: add_Message})

export const newMessage = (text) => ({
    type: update_Message, message: text})

export default dialogsReducer