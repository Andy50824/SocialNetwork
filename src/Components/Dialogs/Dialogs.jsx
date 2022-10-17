import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import DialogsMessage from './DialogMessage/DialogsMessage'


const Dialogs = (props) => {
    let dialogsItems = props.dialogsData
        .map(d => <DialogsItem name={d.name} id={d.id} /> )

    let messageItems = props.messageData
        .map(m => <DialogsMessage message={m.message}/>)

    let newMessageEl = React.createRef();

    let addMessage = () => {
        props.addMessage()
    }

    let onCheckUpdate = () => {
        let text = newMessageEl.current.value;
        props.checkUpdate(text)
        
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messageItems   }
                <div>
                    <textarea onChange={onCheckUpdate} ref={newMessageEl} value={props.updateMessage}/>
                </div>
                <div>
                    <button onClick={addMessage}>New message</button>
                </div>
            </div>
        </div>
    )

}

export default Dialogs
