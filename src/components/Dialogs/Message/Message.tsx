import React from 'react';
import s from './../Dialogs.module.css'
import {CustomButton} from "../../ SuperButton/CustomButton";

const Message =(props:any)=>{
    return(

        <div className={s.message}>{props.text}

        </div>
    )
}
export default Message;