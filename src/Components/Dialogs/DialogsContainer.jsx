import React from 'react'
import { addMessage } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../Hok/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        
        }
}


// let authRedirect = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, {addMessage, newMessage })(authRedirect);

// export default DialogsContainer

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs)


