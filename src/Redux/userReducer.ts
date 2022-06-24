import {v1} from "uuid";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETPAGE = 'SETPAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'

type followType = ReturnType<typeof followActionCreator>
type unfollowType = ReturnType<typeof unfollowActionCreator>
type setUsersType = ReturnType<typeof setUsersActionCreator>
type setPageType = ReturnType<typeof setPageActionCreator>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>

export type UsersActionsTypes = followType | unfollowType | setUsersType | setPageType | setTotalUsersCountType

export type UserTypeFromServer ={
    name: string,
    id: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}

// export type UserType ={
//     id: string
//     name: string
//     location :{
//         city: string
//         country: string
//     }
//     status: string
//     followed: boolean
// }

export type initialStateType = {
    users: Array<UserTypeFromServer>
    pageSize: number
    totalCount: number
    CurrentPage: number
}

let initialState: initialStateType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    CurrentPage: 2

}


export const userReducer = (state: initialStateType = initialState, action: UsersActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {...state, users: state.users.map( (m, index) => {
                if (m.id === action.userID) {
                    return {...m , followed: true}
                }
            return m
            })
            }
        case UNFOLLOW: {
             return {...state, users: state.users.map( (m, index) => {
                    if (m.id === action.userID) {
                        return {...m , followed: false}
                    }
                    return m
                })
            }

        }

        case SETUSERS: {
            return {...state, users: [...action.users]}
        }

        case SETPAGE:{
            return {...state, CurrentPage: action.CurrentPage}
        }
        case SET_TOTAL_USERS:{
            return {...state, totalCount: action.totalCount}
        }

        default:
            return state
    }
}

export const followActionCreator = (userID:string) => ({type: FOLLOW , userID} as const)
export const unfollowActionCreator = (userID: string) => ({type: UNFOLLOW, userID} as const)
export const setUsersActionCreator = (users: UserTypeFromServer[]) => ({type: SETUSERS, users} as const)
export const setPageActionCreator = (CurrentPage: number) => ({type: SETPAGE, CurrentPage } as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS, totalCount } as const)

