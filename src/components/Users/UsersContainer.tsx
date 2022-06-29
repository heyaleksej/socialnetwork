import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from '../../Redux/redux-store';
import {
    followActionCreator,
    initialStateType, setFetchingUsersCountAC, setPageActionCreator,
    setTotalUsersCountAC,
    setUsersActionCreator,
    unfollowActionCreator,
    UserTypeFromServer
} from "../../Redux/userReducer";
import UsersClear from "./UsersСlear";
import loader from '../../common/img/Loading_icon.gif'
import {getUsers} from "../../DAL/api";

export type ItemsApiUserType ={
    items: UserTypeFromServer[]
    totalCount: number
}


type MapStatePropsType = initialStateType


type mapDispatchPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void
    setUser: (users: UserTypeFromServer[]) => void
    setPage: (CurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setFetchingUsers: (isFetching: boolean) => void

}

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

class UsersClass extends React.Component<UsersPropsType> {
    componentDidMount = () => {
        this.props.setFetchingUsers(true)
        getUsers(this.props.CurrentPage, this.props.pageSize).then(data => {
            this.props.setFetchingUsers(false)
            this.props.setUser(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    SetPageHandler = (page: number) => {
        this.props.setFetchingUsers(true)
        this.props.setPage(page)

        getUsers(page, this.props.pageSize).then(data => {
            debugger
            this.props.setFetchingUsers(false)
            this.props.setUser(data.items)
        })
    }


    render() {
        return <>
            {this.props.isFetching ? <img src={loader}/> : null}
            <UsersClear users={this.props.users}
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        CurrentPage={this.props.CurrentPage}
                        SetPageHandler={this.SetPageHandler}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
            />
        </>

    }

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        CurrentPage: state.usersPage.CurrentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userID: string) => dispatch(unfollowActionCreator(userID)),
        setUser: (users: UserTypeFromServer[]) => dispatch(setUsersActionCreator(users)),
        setPage: (CurrentPage: number) => dispatch(setPageActionCreator(CurrentPage)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
        setFetchingUsers: (isFetching: boolean) => dispatch(setFetchingUsersCountAC(isFetching))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)



