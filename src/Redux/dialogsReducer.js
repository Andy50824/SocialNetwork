const add_Message = 'ADD-MESSAGE'


let initialState = {
    messageData : [
        { id: 0, message: 'Hello' },
        { id: 1, message: 'How are you' },
        { id: 2, message: 'Yo' }
    ],
    

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
                message: action.newMessage,};
            return {...state,
                messageData: [...state.messageData, newMessage],
                }

        default:
            return state
}}

export const addMessage = (newMessage) => ({type: add_Message, newMessage})

export default dialogsReducer