import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import { AppStateType } from '../../Redux/redux-store';
import {
    followActionCreator,
    initialStateType, setPageActionCreator,
    setTotalUsersCountAC,
    setUsersActionCreator,
    unfollowActionCreator,
    UserTypeFromServer
} from "../../Redux/userReducer";
import axios from "axios";
import UsersClear from "./UsersСlear";


type MapStatePropsType = initialStateType


type mapDispatchPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void
    setUser: (users: UserTypeFromServer[]) => void
    setPage: (CurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void

}

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

class UsersClass extends React.Component<UsersPropsType> {
    componentDidMount = () => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    SetPageHandler = (page: number) => {

        this.props.setPage(page)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
        })
    }


    render() {
        return <div>
            <UsersClear users={this.props.users}
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        CurrentPage={this.props.CurrentPage}
                        SetPageHandler={this.SetPageHandler}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
            />
        </div>

    }

}



const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        CurrentPage: state.usersPage.CurrentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID: string) => dispatch(unfollowActionCreator(userID)),
        setUser: (users: UserTypeFromServer[]) => dispatch(setUsersActionCreator(users)),
        setPage: (CurrentPage: number) => dispatch(setPageActionCreator(CurrentPage)),
        setTotalUsersCount:(totalCount: number) => dispatch(setTotalUsersCountAC(totalCount))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)



