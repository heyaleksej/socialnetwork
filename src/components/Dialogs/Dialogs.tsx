import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import Dialog from './Dialogs/Dialog';
import Message from './Message/Message';



function Dialogs(props:any) {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs}
            </div>
            <div className={s.messages}>
                {props.messages}
            </div>
        </div>
    )
}

export default Dialogs;