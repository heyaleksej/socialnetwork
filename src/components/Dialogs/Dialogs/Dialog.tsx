import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'


const Dialog=(props:any)=>{
    let path = "/dialogs/" + props.id
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={s.name}>{props.name}</NavLink>
        </div>
    )
}
export default Dialog;