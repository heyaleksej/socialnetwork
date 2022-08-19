import {PostsType} from "./types";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {ProfileApi, UsersApi} from "../DAL/api";
import { ProfileType } from "../components/Profile/ProfileInfo/ProfileInfo";
import { BaseThunkType } from "./redux-store";
import { FormAction, stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const DELETE_POST = 'DELETE_POST'
const ADD_PHOTO_SUCCESS = 'ADD_PHOTO_SUCCESS'

type addPostType = ReturnType<typeof addPostActionCreator>
type onPostChangeType = ReturnType<typeof onPostChangeActionCreator>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setStatusType = ReturnType<typeof SetStatusAC>
type updateStatusType = ReturnType<typeof updateStatusAC>
type deletePostType = ReturnType<typeof deletePost>
type addNewPhotoType = ReturnType<typeof addPhotoSuccess>

export type ProfileActionsTypes =
    addPostType |
    onPostChangeType |
    setUserProfileType |
    setStatusType |
    updateStatusType |
    deletePostType |
    addNewPhotoType


export type ProfileTypeFromServer = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe:string
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
    status: string
    isAuth: boolean
    authId: string | undefined

}

let initialState = {
    posts: [
        {id: v1(), message: 'hello', like: 2},
        {id: v1(), message: 'postav like pliz', like: 5}
    ] as PostsType[],
    newPostText: '',
    profile: null,
    status: '',
    isAuth: false,
    authId: undefined
}




export const profileReducer = (state: initialStateType = initialState, action: ProfileActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST :
            let newPost: PostsType = {
                id: v1(),
                message: action.newPostText,
                like: 0
            }
            return {
                ...state,  posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE : {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS:{
            return {
                ...state, status: action.status

            }
        }
        case DELETE_POST:{
            return {
                ...state, posts: state.posts.filter(f => f.id != action.postID)
            }
        }
        case ADD_PHOTO_SUCCESS:{
            return {...state, profile: {...state.profile, photos: action.photo} as ProfileTypeFromServer}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const onPostChangeActionCreator = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}
export const setUserProfile = (profile: ProfileTypeFromServer) => {
    return {type: SET_USER_PROFILE, profile} as const

}
export const SetStatusAC =(status:string)=>({type: SET_STATUS, status} as const)
export const updateStatusAC =(status: string)=>({type: UPDATE_STATUS, status} as const)
export const deletePost = (postID:string)=>({type:DELETE_POST, postID} as const)
export const addPhotoSuccess = (photo:any)=>({type:ADD_PHOTO_SUCCESS, photo} as const)

export const getUserProfileTC = (userId: string): any => {
    return (
        (dispatch: Dispatch<ProfileActionsTypes>) => {
            return UsersApi.getUserProfile(userId).then(data => {
                dispatch(setUserProfile(data))
            })
          }
    )
}

// refactoring async
//
// export const getUserProfileTC = (userId: string): any => async (dispatch: Dispatch<ProfileActionsTypes>) => {
//             const response:any = UsersApi.getUserProfile(userId)
//             dispatch(setUserProfile(response.data))
//
// }

export const getStatusTC = (userId: string): any =>{
    return (dispatch: Dispatch<ProfileActionsTypes>) =>{
        return ProfileApi.getStatus(userId).then(data => { dispatch(SetStatusAC(data))

        })

    }
}

export const updateStatusTC = (status: string): any =>{
    return (dispatch: Dispatch<ProfileActionsTypes>) =>{
        ProfileApi.updateStatus(status).then(response => {
            if (response.data.resultCode === 0)
            dispatch(SetStatusAC(status))

        })

    }
}

export const addNewPhoto = (photo: File): any =>{
    return (dispatch: Dispatch<ProfileActionsTypes>) =>{
        ProfileApi.safePhoto(photo).then(response => {
            if (response.data.resultCode === 0)
                dispatch(addPhotoSuccess(response.data.data.photos))

        })

    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id

    const data = await ProfileApi.saveProfile(profile)

    if (data.resultCode === 0) {

        if (userId != null) {
            dispatch(getUserProfileTC(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}

type ThunkType = BaseThunkType<ProfileActionsTypes | FormAction>

