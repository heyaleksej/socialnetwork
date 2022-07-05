import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileTypeFromServer} from "../../Redux/profileReducer";

type ProfilePropsType = {
    profile?: ProfileTypeFromServer | null
    status: string
    updateStatusTC:(status:string)=>void


}



const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC} />
            <MyPostsContainer />
        </div>);


}

export default Profile;