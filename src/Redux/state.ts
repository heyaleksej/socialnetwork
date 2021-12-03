export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    updateNewPostText: (newPostText: string) => void
    addPost: (postMessage: string) => void
    subscribe: (observer: any) => void
    getState: () => RootStateType
    dispatch:(action:ActionsTypes)=>void

}

type AddPostActionType={
    type:'ADD-POST'
    newPost: string
}

type UpdateNewPostTextType={
    type:'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

export type ActionsTypes= AddPostActionType | UpdateNewPostTextType

let store: StoreType = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'hello', like: 2},
                {id: 2, message: 'postav like pliz', like: 5}
            ],
            newPostText: '',

        },


        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Pasha', ava: 'https://www.blast.hk/attachments/64804/'},
                {id: 2, name: 'Masha', ava: 'https://www.meme-arsenal.com/memes/b00e44b9e85d665a178c4ea8f907979c.jpg'},
                {id: 3, name: 'Polly', ava: 'https://s00.yaplakal.com/pics/pics_original/4/4/9/10477944.jpg'},
                {id: 4, name: 'Katya', ava: 'https://www.meme-arsenal.com/memes/92ffd0b4948f3bf93d7df8e58006e879.jpg'},
                {id: 5, name: 'Sergey', ava: 'https://www.meme-arsenal.com/memes/6cc2c9676b78a3a6690b48c41e936660.jpg'}
            ],
            messages: [
                {id: 1, text: 'privetik'},
                {id: 2, text: 'pochemu ignor'},
                {id: 3, text: 'da ladno'},
                {id: 4, text: ' i fuzherchiki'},
                {id: 5, text: 'ponyal'}
            ]
        },
        sidebar: {}


    },
    getState() {

        return this._state;
    },
    _callSubscriber(state: RootStateType) {
    },
    updateNewPostText(newPostText: string) {
        // this._state.profilePage.newPostText = newPostText
        // this._callSubscriber(this._state)
    },
    addPost(postMessage: string) {
        // let newPost: PostsType = {
        //     id: 5,
        //     message: this._state.profilePage.newPostText,
        //     like: 0
        // }
        // this._state.profilePage.posts.push(newPost)
        // this._state.profilePage.newPostText = ''
        //
        // this._callSubscriber(this._state)
    },
    subscribe(observer: any) {    //
        this._callSubscriber = observer
    },
    dispatch(action){ // {type: 'ADD-POST'}
        if(action.type === 'ADD-POST'){
            let newPost: PostsType = {
                id: 5,
                message: action.newPost,
                like: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''

            this._callSubscriber(this._state)
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        }
    }


}


export type MessageType = {
    id: number
    text: string
}

export type DialogsType = {
    id: number
    name: string
    ava: string
}

export type PostsType = {
    id?: number;
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
}

export type SidebarType = {}

export type RootStateType = {

    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export default store;