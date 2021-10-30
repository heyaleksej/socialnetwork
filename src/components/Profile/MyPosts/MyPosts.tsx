import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea> </textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
            <Post title='hello' like={'like(2)'}/>
            <Post title='postav like pliz' like={'like(5)'}/>
            </div>
        </div>);
}

export default MyPosts;