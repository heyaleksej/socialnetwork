import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ProfileTypeFromServer} from "../../../Redux/profileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from './../../../common/img/Sample_User_Icon.png'
import ProfileDataForm, {PhotosType} from "./ProfileDataForm";
import ProfileDataFormWithRedux from "./ProfileDataForm";

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
    goToEditMode: () => void
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
    return <div className={s.contact}>
        <b>{contactTitle}</b>:{contactValue}
    </div>
}


const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {
    return <div>
        {isOwner && <button onClick={goToEditMode}>edit</button>}
        <div>
            <b>fullName</b>:{profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>:{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b> что могу </b>: {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b> Contacts </b>: {profile && Object.keys(profile.contacts).map((key) => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
    </div>
}


export function ProfileInfo({profile, saveProfile, ...props}: ProfileInfoPropsType) {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const AddAvatar = (e: ChangeEvent<HTMLInputElement>) => {
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


    return (
        <div>
            <div className={s.statusContainer}>
                <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC}/>
            </div>
            <div className={s.profileInfoBox}>
                <div className={s.userAvatar}>
                    <img className={s.userAvatar} src={profile.photos.large || userPhoto}/>
                    {props.isOwner && <input type={'file'} onChange={AddAvatar}/>}
                </div>
                <div className={s.contactsSection}>
                    {editMode ?
                        <ProfileDataFormWithRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                        <ProfileData profile={profile} isOwner={props.isOwner} goToEditMode={goToEditModeHandler}/>}
                </div>
            </div>
        </div>

    )
}
