import {addPostActionCreator, onPostChangeActionCreator} from "./profileReducer";
import {addMessageActionCreator, onMessageChangeActionCreator} from "./dialogsReducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: any) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void

}

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextType = ReturnType<typeof onPostChangeActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type onMessageChangeType = ReturnType<typeof onMessageChangeActionCreator>


export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | AddMessageActionType | onMessageChangeType


export type MessageType = {
    id: string
    text: string
}

export type DialogsType = {
    id: string
    name: string
    ava: string
}

export type PostsType = {
    id?: string;
    message: string;
    like: number;
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string

}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newTextMessage: string

}

export type SidebarType = {}

export type RootStateType = {

    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


/*
export default store;*/
