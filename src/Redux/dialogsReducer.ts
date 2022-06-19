import {ActionsTypes, DialogsType, MessageType} from "./store";
import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

type initialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newTextMessage: string
}

let initialState = {
    dialogs: [
        {id: v1(), name: 'Pasha', ava: 'https://www.blast.hk/attachments/64804/'},
        {id: v1(), name: 'Masha', ava: 'https://www.meme-arsenal.com/memes/b00e44b9e85d665a178c4ea8f907979c.jpg'},
        {id: v1(), name: 'Polly', ava: 'https://s00.yaplakal.com/pics/pics_original/4/4/9/10477944.jpg'},
        {id: v1(), name: 'Katya', ava: 'https://www.meme-arsenal.com/memes/92ffd0b4948f3bf93d7df8e58006e879.jpg'},
        {id: v1(), name: 'Sergey', ava: 'https://www.meme-arsenal.com/memes/6cc2c9676b78a3a6690b48c41e936660.jpg'}
    ],
    messages: [
        {id: v1(), text: 'privetik'},
        {id: v1(), text: 'pochemu ignor'},
        {id: v1(), text: 'da ladno'},
        {id: v1(), text: ' i fuzherchiki'},
        {id: v1(), text: 'ponyal'}
    ],
    newTextMessage: ''
}


export const dialogsReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: v1(),
                text: action.newMessage,
            }
            state.messages.push(newMessage)
            state.newTextMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT :
            state.newTextMessage = action.newTextMessage
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessage: string) => ({type: ADD_MESSAGE, newMessage: newMessage} as const)
export const onMessageChangeActionCreator = (newTextMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newTextMessage: newTextMessage
    } as const
}