import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ProfileTypeFromServer} from "../../../Redux/profileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from './../../../common/img/Sample_User_Icon.png'
import {PhotosType} from "./ProfileDataForm";
import ProfileDataFormWithRedux from "./ProfileDataForm";
import CustomButton from "../../CustomButton/CustomButton";
import pencil from './../../../common/img/pencil-svgrepo-com.svg'
import IconButton from "@mui/material/IconButton/IconButton";
import {PhotoCamera} from "@mui/icons-material";

export type ProfileInfoPropsType = {
    profile?: ProfileTypeFromServer | null
    status: string
    updateStatusTC: (status: string) => void
    isOwner: boolean
    addNewPhoto: (photo: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>


}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export type ProfileDataPropsType = {
    profile: ProfileTypeFromServer
    isOwner: boolean
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

export const Contact = ({contactTitle, contactValue}: ContactsPropsType) => {
    return <div>
        {contactValue && <span className={s.contactText}>
            <li className={s.contactTitle}>{contactTitle}:</li>{contactValue}
        </span>}
    </div>
}


const ProfileData = ({profile}: ProfileDataPropsType) => {
    return <div>
        <h3> About me: </h3>
        <li>
            <b>Full name</b>:{profile.fullName}
        </li>
        <li>
            <b>Looking for a job</b>:{profile.lookingForAJob ? 'yes' : 'no'}
        </li>
        {profile.lookingForAJob &&
        <li>
            <b> Skills </b>: {profile.lookingForAJobDescription}
        </li>}
        <div>
            <h3> Contacts: </h3> {profile && Object.keys(profile.contacts).map((key) => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
    </div>
}


export function ProfileInfo({profile, saveProfile, isOwner, ...props}: ProfileInfoPropsType) {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const addAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.addNewPhoto(e.target.files[0])
        }
    }

    const goToEditModeHandler = () => {
        setEditMode(true)
    }

    const onSubmit = (formData: ProfileType) => {
        console.log(formData)
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        );
    }

    const profileInfoBox = editMode ? s.EditProfileInfoBox :s.profileInfoBox




    return (
            <div className={profileInfoBox}>

                <div className={s.imgBtn}>
                    <div className={s.statusContainer}>
                        <img className={s.pencil} src={pencil} alt={'edit'}/>
                        <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC}/>
                    </div>
                    <div>
                        <img className={s.userAvatar} src={profile.photos.large || userPhoto}/>
                        {isOwner && editMode &&
                        <IconButton
                            className={s.editAvatarBtn}
                            sx={{color: 'grey', display:'flex' ,justifyContent:'center'}}
                            aria-label="upload picture"
                            component="label"
                        >
                            <input
                                hidden
                                accept="image/*"
                                type="file"
                                onChange={addAvatar}/>
                            <PhotoCamera fontSize="large"/>
                        </IconButton>}
                    </div>
                    {isOwner && !editMode && <CustomButton onClick={goToEditModeHandler} name={'Edit'}>edit</CustomButton>}</div>
                <div className={s.contactsSection}>
                    {editMode ?
                        <ProfileDataFormWithRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                        <ProfileData profile={profile} isOwner={isOwner}/>}
                </div>
            </div>
    )
}
