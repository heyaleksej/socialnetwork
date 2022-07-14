import userimg from './../../common/img/Sample_User_Icon.png'
import s from './Users.module.css'
import React from "react";
import {UserTypeFromServer} from "../../Redux/userReducer";
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void
    followingInProgress: string[]
    user: any
}

export const User = ({followingInProgress, user, unfollow, follow}: UserPropsType) => {
    return <div>
        <div>
            <NavLink to={`/profile/` + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userimg} className={s.img}/>
            </NavLink>
        </div>
        <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id)
                }}>unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id)
                }}>follow</button>}
        </div>
        <span>{user.name}</span>
        <span>{user.status}</span>
    </div>


}

