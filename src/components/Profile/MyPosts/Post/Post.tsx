import React from 'react';
import s from './Post.module.css'
import {PostsType} from "../../../../Redux/store";


const Post = (props:PostsType) => {
    return (
        <div className={s.item}>
            <img src={'https://topmsg.ru/wp-content/uploads/anonymous.jpg'}/>
            {props.message}
            <div>
                <span>Like{props.like}</span>
            </div>
        </div>);


}

export default Post;