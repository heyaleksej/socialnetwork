import React, {useState} from 'react';
import s from './Post.module.css'
// import heart from './../../../../common/Emoji/2764.svg'
import redheart from './../../../../common/Emoji/heartRed.svg'
import heartb from './../../../../common/Emoji/heartB.svg'

type PostType = {
    message: string
    like: number
    userPhoto: string | null | undefined,
}



const Post = (props:PostType) => {

    const [isLike, setIsLike] =useState<boolean>(false)
    const [likeCount, setLikeCount] =useState<number>(props.like)

    const pushLike = (like:number) =>{
        return isLike
            ? (setLikeCount(likeCount - 1), setIsLike(false))
            : (setLikeCount(like + 1), setIsLike(true))
    }

    return (
        <div className={s.wrap}>
            <div>{props.userPhoto && <img className={s.img} src={props.userPhoto}/>}</div>
            <div className={s.text}>{props.message}</div>
            <div className={s.likeBlock}>
                <img onClick={()=>{pushLike(props.like)}} className={s.likeBtn} src={isLike ? redheart: heartb}/>
                <p className={s.likeNum}>{likeCount}</p></div>
        </div>);


}

export default Post;