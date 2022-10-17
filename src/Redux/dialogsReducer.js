const addMessage = 'ADD-MESSAGE'
const updateMessage = 'UPDATE-MESSAGE'

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
        case addMessage: 
            let newMessage = {
                id: 3,
                message: state.updateMessage,};
            return {...state,
                messageData: [...state.messageData, newMessage],
                updateMessage: ''}
            
        case updateMessage: 
            return {...state,
                updateMessage: action.message}
        default:
            return state
}}

export const addMessageCreate = () => ({type: addMessage})

export const updateMessageCreate = (text) => ({
    type: updateMessage, message: text})

export default dialogsReducer