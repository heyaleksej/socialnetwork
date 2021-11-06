import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props:any) => {

    return (
        <div className={s.postBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts}
            </div>
        </div>);
}

export default MyPosts;