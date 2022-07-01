import React from 'react';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from '../../Redux/redux-store';
import {followTC, getUsersTC, initialStateType, setPageAC, unFollowTC, UsersActionsTypes} from "../../Redux/userReducer";
import UsersClear from "./UsersСlear";
import loader from '../../common/img/Loading_icon.gif'
import {RedirectIfNotAuth} from "../../HOCs/RedirectIfNotAuth";


type MapStatePropsType = initialStateType & { auth: boolean }


type mapDispatchPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void
    setPage: (CurrentPage: number) => void
    getUsers: (CurrentPage: number, pageSize: number) => void


}

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

class UsersClass extends React.Component<UsersPropsType> {
    componentDidMount = () => {
        this.props.getUsers(this.props.CurrentPage, this.props.pageSize)
    }

    SetPageHandler = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)

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
                        followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        auth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersActionsTypes>): mapDispatchPropsType => {
    return {
        follow: (userId: string) => dispatch(followTC(userId)),
        unfollow: (userID: string) => dispatch(unFollowTC(userID)),
        setPage: (CurrentPage: number) => dispatch(setPageAC(CurrentPage)),
        getUsers: (CurrentPage: number, pageSize: number) => dispatch(getUsersTC(CurrentPage, pageSize)),
    }
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    RedirectIfNotAuth)
(UsersClass)


// { follow: followAC,
//     unfollow: unfollowAC,
//     setUser: setUsersAC,
//     setPage: setPageAC,
//     setTotalUsersCount:
//     setTotalUsersCountAC,
//         setFetchingUsers: setFetchingUsersCountAC,
//     setFollowingStatus,
//     getUsersTC}



