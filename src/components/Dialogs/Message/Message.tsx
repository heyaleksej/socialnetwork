import React from 'react';
import s from './../Dialogs.module.css'


type MessagePropsType={
    text: string
}

const Message =(props:MessagePropsType)=> <div className={s.message}>{props.text}</div>

export default Message;