import React from 'react'
import { addMessage, newMessage } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../Hok/withAuthRedirect'

let authRedirect = withAuthRedirect(Dialogs)

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        updateMessage: state.dialogsPage.updateMessage,
        
    }
}


const DialogsContainer = connect(mapStateToProps, {addMessage, newMessage })(authRedirect);

export default DialogsContainer 
