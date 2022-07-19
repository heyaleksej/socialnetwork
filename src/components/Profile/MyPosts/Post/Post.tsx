import React from 'react';
import s from './Post.module.css'
import heart from './../../../../common/Emoji/2764.svg'

type PostType = {
    message: string
    like: number
    userPhoto: string | null | undefined,
}


const Post = (props:PostType) => {
    return (
        <div className={s.wrap}>
            {props.userPhoto && <img className={s.img} src={props.userPhoto}/>}
            <div className={s.text}>{props.message}</div>
            <div className={s.likeBlock}>
                <img className={s.likeBtn} src={heart}/>
                <p className={s.likeNum}>{props.like}</p></div>
        </div>);


}

export default Post;