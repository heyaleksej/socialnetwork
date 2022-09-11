import userimg from './../../common/img/Sample_User_Icon.png'
import s from './Users.module.css'
import React from "react";
import {NavLink} from 'react-router-dom';
import CustomButton from "../CustomButton/CustomButton";

type UserPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void
    followingInProgress: string[]
    user: any
}

export const User = ({followingInProgress, user, unfollow, follow}: UserPropsType) => {
    return <span className={s.userList}>
        <div>
            <NavLink to={`/profile/` + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userimg} className={s.img}/>
            </NavLink>
        </div>
         <div className={s.status}>
            <span>{user.name}</span>
        </div>
        <div>
            {user.followed
                ? <CustomButton disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id)
                }} name={'unfollow'}/>
                : <CustomButton disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id)
                }} name={'follow'} />}
        </div>

    </span>


}

