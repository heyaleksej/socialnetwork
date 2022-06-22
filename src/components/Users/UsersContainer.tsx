import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Users} from "./Users";
import { AppStateType } from '../../Redux/redux-store';
import {followActionCreator, setUsersActionCreator, unfollowActionCreator,  UserTypeFromServer} from "../../Redux/userReducer";


type MapStatePropsType = {
 // users: UserType[]
    users: UserTypeFromServer[]
}

type mapDispatchPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void
    setUser: (users: UserTypeFromServer[]) => void

}

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID: string) => dispatch(unfollowActionCreator(userID)),
        setUser: (users: UserTypeFromServer[]) => dispatch(setUsersActionCreator(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)



