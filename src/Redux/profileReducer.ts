import {PostsType} from "./store";
import {v1} from "uuid";

const ADD_POST ='ADD-POST'
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'

type initialStateType={
    posts: Array<PostsType>
    newPostText: string
}

let initialState = {
    posts: [
        {id: v1(), message: 'hello', like: 2},
        {id: v1(), message: 'postav like pliz', like: 5}
    ],
    newPostText: ''}


export const profileReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST :
            let newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                like: 0
            }
            return {...state, newPostText : '', posts:[...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }

        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const onPostChangeActionCreator = (newPostText:string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}
