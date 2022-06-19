import React, {ChangeEvent} from 'react';
import {ActionsTypes, DialogsType, MessageType, PostsType} from "../../Redux/store";

import Dialogs from './Dialogs';
import store, {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogsReducer";

type DialogsContainerPropsType = {
    // dialogs: Array<DialogsType>
    // dispatch: (action: ActionsTypes) => void
    // text: string
    // messages: Array<MessageType>
}

// function DialogsContainer1(props: DialogsContainerPropsType) {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//
//                 const addMessage = () => store.dispatch(addMessageActionCreator(store.getState().dialogsPage.newTextMessage))
//
//                 const onMessageChange = (event: ChangeEvent<HTMLInputElement>) => store.dispatch(onMessageChangeActionCreator(event.currentTarget.value))
//
// return <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} dialogs={store.getState().dialogsPage.dialogs}
//                 messages={store.getState().dialogsPage.messages} text={store.getState().dialogsPage.newTextMessage}/>
// //             }
//             }
//         </StoreContext.Consumer>
//
//     )
//
// }


type MapStatePropsType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>,
    text: string

}

type mapDispatchPropsType = {
    addMessage: () => void,
    onMessageChange: (event: ChangeEvent<HTMLInputElement>) => void

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        text: state.dialogsPage.newTextMessage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addMessage:() => dispatch(addMessageActionCreator()),
        onMessageChange:(event: ChangeEvent<HTMLInputElement>)=> dispatch(onMessageChangeActionCreator(event.currentTarget.value))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

