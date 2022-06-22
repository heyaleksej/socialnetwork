import {v1} from "uuid";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'

type followType = ReturnType<typeof followActionCreator>
type unfollowType = ReturnType<typeof unfollowActionCreator>
type setUsersType = ReturnType<typeof setUsersActionCreator>

export type UsersActionsTypes = followType | unfollowType | setUsersType

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

type initialStateType = {
    users: Array<UserTypeFromServer>
}

let initialState: initialStateType = {
    users: [],
}


export const userReducer = (state: initialStateType = initialState, action: UsersActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {...state, users: state.users.map( (m, index) => {
                if (m.id === action.userID) {
                    return {...m , followed: false}
                }
            return m
            })
            }
        case UNFOLLOW: {
             return {...state, users: state.users.map( (m, index) => {
                    if (m.id === action.userID) {
                        return {...m , followed: true}
                    }
                    return m
                })
            }

        }

        case SETUSERS: {
            return {...state, users: [...action.users]
        }}

        default:
            return state
    }
}

export const followActionCreator = (userID:string) => ({type: FOLLOW , userID} as const)
export const unfollowActionCreator = (userID: string) => ({type: UNFOLLOW, userID} as const)
export const setUsersActionCreator = (users: UserTypeFromServer[]) => ({type: SETUSERS, users} as const)

