import {PostsType} from "./store";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {UsersApi} from "../DAL/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type addPostType = ReturnType<typeof addPostActionCreator>
type onPostChangeType = ReturnType<typeof onPostChangeActionCreator>
type setUserProfileType = ReturnType<typeof setUserProfile>

export type ProfileActionsTypes = addPostType | onPostChangeType | setUserProfileType




export type ProfileTypeFromServer = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type initialStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileTypeFromServer | null
}

let initialState = {
    posts: [
        {id: v1(), message: 'hello', like: 2},
        {id: v1(), message: 'postav like pliz', like: 5}
    ],
    newPostText: '',
    profile: null
}


export const profileReducer = (state: initialStateType = initialState, action: ProfileActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST :
            let newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                like: 0
            }
            return {
                ...state, newPostText: '', posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }

        case SET_USER_PROFILE : {
            return {
                ...state, profile: action.profile
            }
        }

        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const onPostChangeActionCreator = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}

const setUserProfile = (profile: ProfileTypeFromServer) => {
    return {type: SET_USER_PROFILE, profile} as const

}

export const setUserProfileTC = (userId: string): any => {
    return (
        (dispatch: Dispatch<ProfileActionsTypes>) => {
            UsersApi.getUserProfile(userId).then(data => {
                dispatch(setUserProfile(data))
            })
          }
    )
}

