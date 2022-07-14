import React from "react";
import {UserTypeFromServer} from "../../Redux/userReducer";
import {Paginator} from '../../Utils/Paginator';
import {User} from "./User";

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

export const UsersClear = ({
                               totalCount,
                               pageSize,
                               CurrentPage,
                               SetPageHandler,
                               followingInProgress,
                               ...props
                           }: UsersClearPropsType) => {

    return <div>
        <Paginator CurrentPage={CurrentPage} SetPageHandler={SetPageHandler} pageSize={pageSize}
                   totalCount={totalCount}/>
        {props.users.map(m => <User key={m.id} unfollow={props.unfollow} follow={props.follow}
                                    followingInProgress={followingInProgress} user={m}/>)}

    </div>

}

export default UsersClear