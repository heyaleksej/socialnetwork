import React from "react";
import s from './ProfileInfo.module.css'
import { ProfileTypeFromServer} from "../../../Redux/profileReducer";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import { Preloader } from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";

export type ProfileInfoPropsType = {
    profile?: ProfileTypeFromServer | null
    status: string
    updateStatusTC:(status:string)=>void

}


export function ProfileInfo(props:ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
      return (
        <div>
            <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC}/>
            <div>
                   <div>
                        <span>
                            <img src={props.profile?.photos.small}/>
                        </span>
                        <div>{props.profile?.contacts.vk}</div>
                        <div>{props.profile?.contacts.github}</div>
                        <div>{props.profile?.contacts.instagram}</div>
                        <div>{props.profile?.contacts.facebook}</div>
                        <div>{props.profile?.contacts.twitter}</div>
                        <div>{props.profile?.contacts.youtube}</div>
                        <div>{props.profile?.fullName}</div>
                        <div>{props.profile?.lookingForAJob}</div>
                        <div>{props.profile?.lookingForAJobDescription}</div>

                    </div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQyG5V9oSD7hP7SZePDYuC56TCQkLWUt6Rg&usqp=CAU"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}