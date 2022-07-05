import {UsersApi} from "../DAL/api";
import {Dispatch} from "redux";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETPAGE = 'SETPAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_FETCHING = 'SET_FETCHING'
const SET_FOLLOWING_STATUS = 'SET_FOLLOWING_STATUS'

type followType = ReturnType<typeof followAC>
type unfollowType = ReturnType<typeof unfollowAC>
type setUsersType = ReturnType<typeof setUsersAC>
type setPageType = ReturnType<typeof setPageAC>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
type setFetchingType = ReturnType<typeof setFetchingUsersCountAC>
type setFollowingStatusType = ReturnType<typeof setFollowingStatus>

export type UsersActionsTypes =
    followType
    | unfollowType
    | setUsersType
    | setPageType
    | setTotalUsersCountType
    | setFetchingType
    | setFollowingStatusType

export type UserTypeFromServer = {
    name: string,
    id: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}

export type initialStateType = {
    users: Array<UserTypeFromServer>
    pageSize: number
    totalCount: number
    CurrentPage: number
    isFetching: boolean
    followingInProgress: string[]

}


let initialState: initialStateType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    CurrentPage: 2,
    isFetching: false,
    followingInProgress: []

}


export const userReducer = (state: initialStateType = initialState, action: UsersActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state, users: state.users.map((m, index) => {
                    if (m.id === action.userID) {
                        return {...m, followed: true}
                    }
                    return m
                })
            }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map((m, index) => {
                    if (m.id === action.userID) {
                        return {...m, followed: false}
                    }
                    return m
                })
            }

        }

        case SETUSERS: {
            return {...state, users: [...action.users]}
        }

        case SETPAGE: {
            return {...state, CurrentPage: action.CurrentPage}
        }
        case SET_TOTAL_USERS: {
            return {...state, totalCount: action.totalCount}
        }

        case SET_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_FOLLOWING_STATUS: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const followAC = (userID: string) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: UserTypeFromServer[]) => ({type: SETUSERS, users} as const)
export const setPageAC = (CurrentPage: number) => ({type: SETPAGE, CurrentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS, totalCount} as const)
export const setFetchingUsersCountAC = (isFetching: boolean) => ({type: SET_FETCHING, isFetching} as const)
export const setFollowingStatus = (isFollowing: any, userId: string) => ({
    type: SET_FOLLOWING_STATUS,
    isFollowing,
    userId
} as const)


export const getUsersTC = (CurrentPage: number, pageSize: number): any => {
    return (
        (dispatch: Dispatch<UsersActionsTypes>) => {
            dispatch(setFetchingUsersCountAC(true))
            UsersApi.getUsers(CurrentPage, pageSize).then(data => {
                dispatch(setFetchingUsersCountAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
            })
        })
}


export const followTC = (UserId: string): any => {
    return (
        (dispatch: Dispatch<UsersActionsTypes>) => {
            dispatch(setFollowingStatus(true, UserId))
            UsersApi.followUser(UserId).then(data => {

                if (data.resultCode === 0) {
                    dispatch(followAC(UserId))
                }
                dispatch(setFollowingStatus(false, UserId))

            })
        })
}

export const unFollowTC = (UserId: string): any => {
    return (
        (dispatch: Dispatch<UsersActionsTypes>) => {
            dispatch(setFollowingStatus(true, UserId))
            UsersApi.unFollowUser(UserId).then(data => {

                if (data.resultCode === 0) {dispatch(unfollowAC(UserId))}
                dispatch(setFollowingStatus(false, UserId))
            })
        })
}





