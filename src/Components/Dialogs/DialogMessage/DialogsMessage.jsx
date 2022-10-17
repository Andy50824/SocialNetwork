import React from 'react'
import s from './../Dialogs.module.css'

const DialogsMessage = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
      )
}

export default DialogsMessage