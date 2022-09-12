import React from "react";
import {UserTypeFromServer} from "../../../Redux/userReducer";
import {User} from "../User";
import s from '../Users.module.css'
import Pagination from "@mui/material/Pagination";


type FriendsPropsType = {
    users: Array<UserTypeFromServer>
    CurrentPage: number
    totalCount?: number
    pageSize?: number
    setPageHandler: (m: number) => void
    follow: (userID: string) => void,
    unfollow: (userID: string) => void
    followingInProgress: string[]
}

export const Friends = ({users, setPageHandler, followingInProgress, ...props}: FriendsPropsType) => {

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageHandler(value);
    }

    const filteredUsers = users.filter(f=>f.followed)
    const totalCount = filteredUsers.length
    const pageSize = 1

    return <div className={s.usersPage}>

        {filteredUsers.map(m => <User key={m.id}
                                    unfollow={props.unfollow}
                                    follow={props.follow}
                                    followingInProgress={followingInProgress}
                                    user={m}/>)}
        <div className={s.paginationBlock}>
            <Pagination
                showFirstButton showLastButton
                shape="rounded"
                count={Math.ceil(totalCount/pageSize)}
                onChange={handleChangePage}
            />
        </div>
    </div>
}

export default Friends