import state, {ActionsTypes, DialogsPageType, MessageType, RootStateType} from "./state";
const ADD_MESSAGE ='ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReducer =(state: DialogsPageType, action:ActionsTypes): DialogsPageType => {
 switch (action.type) {
     case ADD_MESSAGE:
         let newMessage: MessageType = {
             id: 5655,
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