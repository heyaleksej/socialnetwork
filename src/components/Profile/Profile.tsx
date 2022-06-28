import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../Redux/store";
import store from "../../Redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {initialStateType, ProfileTypeFromServer} from "../../Redux/profileReducer";

type ProfilePropsType = {
    profile?: ProfileTypeFromServer | null

}



const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>);


}

export default Profile;