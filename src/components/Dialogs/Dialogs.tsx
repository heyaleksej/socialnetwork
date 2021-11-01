import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'


const DialogItem=(props:any)=>{
    let path = "/dialogs/" + props.id
    return(
        <div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message =(props:any)=>{
    return(
        <div className={s.message}>{props.text}</div>
    )
}

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dasha' id='1'/>
                <DialogItem name='Masha' id='2'/>
                <DialogItem name='Polly' id='3'/>
                <DialogItem name='Katya' id='4'/>
                <DialogItem name='Sergey' id='5'/>
                <DialogItem name='Arty' id='6'/>

            </div>
            <div className={s.messages}>
                <Message text='privetik'/>
                <Message text='pochemu ignor'/>
                <Message text='ok'/>
            </div>
        </div>
    )
}

export default Dialogs;