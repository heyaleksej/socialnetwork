import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../Redux/store";
import store from "../../Redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType={
    // message:string
    // posts: Array<PostsType>
    // dispatch:(action:ActionsTypes)=>void

}


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>);


}

export default Profile;