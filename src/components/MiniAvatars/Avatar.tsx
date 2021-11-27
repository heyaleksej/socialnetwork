import React from 'react';
import s from '../MiniAvatars/MiniAvatars.module.css'


const Avatar =(props:any)=>{
    return(

        <div >
            <img className={s.avatarImg} src={props.ava}/>
        </div>
    )
}
export default Avatar;