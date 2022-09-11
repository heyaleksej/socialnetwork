import React from 'react';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from '../../Redux/redux-store';
import {
    followTC,
    getUsersTC,
    setPageAC,
    unFollowTC,
    UsersActionsTypes,
    UserTypeFromServer
} from "../../Redux/userReducer";
import UsersClear from "./UsersСlear";
import {Preloader} from "../../common/Preloader/Preloader";
import {
    getAuth,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "./userSelector";


type MapStatePropsType = {
    users: Array<UserTypeFromServer>
    pageSize: number
    totalCount: number
    CurrentPage: number
    isFetching: boolean
    followingInProgress: string[]
    auth: boolean
}


type mapDispatchPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void
    setPage: (CurrentPage: number) => void
    getUsers: (CurrentPage: number, pageSize: number) => void


}

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

class UsersClass extends React.Component<UsersPropsType> {
    componentDidMount = () => {
        const {CurrentPage,pageSize} = this.props
        this.props.getUsers(CurrentPage, pageSize)
    }

    setPageHandler = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)

    }


    render() {
        console.log('render users! ')

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersClear users={this.props.users}
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        CurrentPage={this.props.CurrentPage}
                        setPageHandler={this.setPageHandler}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}
            />
        </>

    }

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    console.log('mapToStateToProps users')

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        CurrentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        auth: getAuth(state),
        // fake: state.usersPage.fake
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
    connect(mapStateToProps, mapDispatchToProps))
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



