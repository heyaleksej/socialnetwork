import userimg from './../../common/img/Sample_User_Icon.png'
import s from './Users.module.css'
import React from "react";
import {UserTypeFromServer} from "../../Redux/userReducer";
import {NavLink} from 'react-router-dom';

type UsersClearPropsType = {
    users: Array<UserTypeFromServer>
    CurrentPage: number
    totalCount: number
    pageSize: number
    SetPageHandler: (m: number) => void
    follow: (userID: string) => void,
    unfollow: (userID: string) => void
    followingInProgress: string[]
}

export const UsersClear = (props: UsersClearPropsType) => {

    let PagesCount = Math.ceil(props.totalCount / props.pageSize)

    let Pages = []
    for (let i = 1; i <= PagesCount; i++) {
        Pages.push(i)
    }


    return <div>
        <div>
            {Pages.map((m, index) => {
                return <span key={index} className={props.CurrentPage === m ? s.currentPage : ''} onClick={() => {
                    props.SetPageHandler(m)
                }}>{m} </span>
            })}
        </div>
        {props.users.map(m => <div key={m.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/` + m.id}>
                            <img src={m.photos.small != null ? m.photos.small : userimg} className={s.img}/>
                        </NavLink>
                            </div>
                        <div>
                            {m.followed
                                ? <button disabled={props.followingInProgress.some(id =>id === m.id)} onClick={() => {
                                    props.unfollow(m.id)
                                }}>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === m.id)} onClick={() => {
                                    props.follow(m.id)}}>follow</button>}
                        </div>
                    </span>
                <span>{m.name}</span>
            </div>
        )}

    </div>

}

export default UsersClear