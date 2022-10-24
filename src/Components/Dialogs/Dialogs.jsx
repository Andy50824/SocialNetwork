import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import DialogsMessage from './DialogMessage/DialogsMessage'
import {reduxForm, Field} from 'redux-form'
import {requiredFields, maxLengthCreator} from '../../utils/validators/validators'
import { Textarea } from '../common/FormsControl/FormsControls'


const maxLengthMessage10 = maxLengthCreator(10)

const Dialogs = (props) => {
    const AddNewMessage = (values) => {
        console.log(values)
        props.addMessage(values.NewMessage)
    }

    let dialogsItems = props.dialogsData
    .map(d => <DialogsItem name={d.name} id={d.id} /> )

    let messageItems = props.messageData
        .map(m => <DialogsMessage message={m.message}/>)


    return (

        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div>
                {messageItems}
                <DialogsReduxForm onSubmit={AddNewMessage}/>
            </div>
        </div>
  
    )
}

const DialogsForm = (props) => {

    return(
        <form className={s.messages} onSubmit={props.handleSubmit}>
            
            <div>
                <Field placeholder='Dialog' name={"NewMessage"} 
                component={Textarea} validate={[requiredFields, maxLengthMessage10]}/>
            </div>
            <div>
                <button>New message</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form:'Dialogs'})(DialogsForm)



export default Dialogs
