import React from 'react';
import s from './Message.module.css'


type MessagePropsType={
    text: string
}

const Message =(props:MessagePropsType)=> {
    return <li className={s.message__item}>
        <p className={s.text}>{props.text}</p>
    </li>
}
export default Message;