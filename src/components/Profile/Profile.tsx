import React, {ChangeEvent} from 'react';
import {ProfileInfo, ProfileType} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileTypeFromServer} from "../../Redux/profileReducer";

type ProfilePropsType = {
    profile?: ProfileTypeFromServer | null
    status: string
    updateStatusTC:(status:string)=>void
    isOwner: boolean
    addNewPhoto:(photo: File)=>void
    saveProfile: (profile: ProfileType) => Promise<any>





}



const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo  profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC} isOwner={props.isOwner} addNewPhoto={props.addNewPhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>);


}

export default Profile;