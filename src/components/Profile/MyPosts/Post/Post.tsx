import React from 'react';
import s from './Post.module.css'


const Post = (props:any) => {
    return (
        <div className={s.item}>
            <img src={'https://topmsg.ru/wp-content/uploads/anonymous.jpg'}/>
            {props.title}
            <div>
                <span>Like{props.like}</span>
            </div>
        </div>);


}

export default Post;