import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/store";
import {CustomButton} from "../../ SuperButton/CustomButton";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    message: string
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void

}


const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map((p, index) => <Post key={index} message={p.message} like={p.like}/>)



    function addPost() {
        console.log('addpost')
        props.addPost()

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('onPostChange')
        props.onPostChange(e)
    }

    return (

        <div className={s.postBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.message}/>
                </div>
                {/*<div>*/}
                {/*    <button onClick={addPost}>Add Post</button>*/}
                {/*</div>*/}

                <CustomButton title={'add post'} onClick={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>);
}


export default MyPosts;

