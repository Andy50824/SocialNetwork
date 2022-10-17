import React from 'react'
import { addMessageCreate, updateMessageCreate } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'


// const DialogsContainer = () => {
    
//     return (
//         <StoreContext.Consumer> 
//             { (store) => {
//                 let state = store.getState()

//                 let onAddMessage = () => {
//                     store.dispatch(addMessageCreate())}

//                 let onCheckUpdate = (text) => {
//                     store.dispatch(updateMessageCreate(text))}
//                 return <Dialogs addMessage={onAddMessage} checkUpdate={onCheckUpdate}
//                         dialogsData={state.dialogsPage.dialogsData}
//                         messageData={state.dialogsPage.messageData}
//                         updateMessage={state.dialogsPage.updateMessage}/>
//                 }}
//         </StoreContext.Consumer>)
//             }

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        updateMessage: state.dialogsPage.updateMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreate());
        },  
        checkUpdate: (text) => {
            dispatch(updateMessageCreate(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer 
