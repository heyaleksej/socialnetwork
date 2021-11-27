import {reRender} from "../render";

export type MessageType = {
    id: number
    text: string
}

export type DialogsType = {
    id: number
    name: string
    ava:string
}

export type PostsType = {
    id?:number;
    message: string;
    like: number;
}

export type ProfilePageType = {
    posts: Array<PostsType>

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



let state : RootStateType = {

    profilePage: {
        posts: [
            {id:1, message: 'hello', like: 2},
            {id:2, message: 'postav like pliz', like: 5}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Pasha', ava:'https://www.blast.hk/attachments/64804/'},
            {id: 2, name: 'Masha',ava:'https://www.meme-arsenal.com/memes/b00e44b9e85d665a178c4ea8f907979c.jpg'},
            {id: 3, name: 'Polly',ava:'https://s00.yaplakal.com/pics/pics_original/4/4/9/10477944.jpg'},
            {id: 4, name: 'Katya',ava:'https://www.meme-arsenal.com/memes/92ffd0b4948f3bf93d7df8e58006e879.jpg'},
            {id: 5, name: 'Sergey',ava:'https://www.meme-arsenal.com/memes/6cc2c9676b78a3a6690b48c41e936660.jpg'}
        ],
        messages: [
            {id: 1, text: 'privetik'},
            {id: 2, text: 'pochemu ignor'},
            {id: 3, text: 'da ladno'},
            {id: 4, text: ' i fuzherchiki'},
            {id: 5, text: 'ponyal'}
        ]},
        sidebar:{}



}

export let addPost=(postMessage:string)=>{
    let newPost:PostsType={
        id:5,
        message:postMessage,
        like:0
    }
    state.profilePage.posts.push(newPost)
    reRender(state)
}

export default state;