import state, {ActionsTypes, PostsType, ProfilePageType, RootStateType} from "./state";
import Profile from "../components/Profile/Profile";

// type ReducerType={
//     state: RootStateType,
//     action:ActionsTypes}

export const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost: PostsType = {
                id: 5,
                message: action.newPost,
                like: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state;
        default:
            return state
    }
}
export const addPostActionCreator = (newPost: string) => ({type: 'ADD-POST', newPost: newPost} as const)
export const onPostChangeActionCreator = (newPostText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: newPostText
    } as const
}