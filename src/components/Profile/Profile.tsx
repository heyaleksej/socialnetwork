import React, {ChangeEvent} from 'react';
import {ProfileInfo, ProfileType} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileTypeFromServer} from "../../Redux/profileReducer";
import s from './Profile.module.css'

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
        <div className={s.profileBox}>
            <ProfileInfo  profile={props.profile}
                          status={props.status}
                          updateStatusTC={props.updateStatusTC}
                          isOwner={props.isOwner}
                          addNewPhoto={props.addNewPhoto}
                          saveProfile={props.saveProfile}/>
            {props.profile && <MyPostsContainer  userPhoto={props.profile.photos.small}/>}
        </div>);


}

export default Profile;