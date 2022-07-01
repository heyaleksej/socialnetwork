import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialogs/Dialog';
import Message from './Message/Message';
import {DialogsType, MessageType} from "../../Redux/store";
import Avatar from '../MiniAvatars/Avatar';
import {CustomInput} from "../CustomInput/CustomInput";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    text: string
    messages: Array<MessageType>
    addMessage:()=>void
    onMessageChange:(event: ChangeEvent<HTMLInputElement>)=>void
    auth: boolean
}


function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.dialogs.map(d => <span key={d.id} className={s.avatarImg}><Dialog name={d.name} id={d.id}/> <Avatar
        ava={d.ava}/>
        </span>   // мапиться по диалогам обънди
    )

    let messagesElements = props.messages.map((m, index) => <Message key={index} text={m.text}/>)

    // let messagesAvatar =props.dialogsPage.dialogs.map(m=> <Avatar ava={m.ava}/>)

    const addMessage = () => {
        console.log('add mess')
        props.addMessage()

    }

    const onMessageChange = (event:ChangeEvent<HTMLInputElement>) => {
        console.log('mess onchange')

        props.onMessageChange(event)
    }

    return (
        <div className={s.dialogs}>
            <span className={s.dialogsItems}>
                {dialogsElements}
            </span>

            <div className={s.messages}>
                {messagesElements}
                <CustomInput title={'send text'} value={props.text} onChange={onMessageChange}  onClick={addMessage}/>
            </div>
            <div>


            </div>
        </div>
    )
}

export default Dialogs;


