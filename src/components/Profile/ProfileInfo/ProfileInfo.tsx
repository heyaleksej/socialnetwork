import React from "react";
import s from './ProfileInfo.module.css'
import { ProfileTypeFromServer} from "../../../Redux/profileReducer";

type ProfileInfoPropsType = {
    profile?: ProfileTypeFromServer | null
}


export function ProfileInfo(props:ProfileInfoPropsType) {
      return (
        <div>
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