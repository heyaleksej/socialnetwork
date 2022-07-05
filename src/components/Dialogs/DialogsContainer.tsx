import React, {ChangeEvent} from 'react';
import {DialogsType, MessageType} from "../../Redux/store";

import Dialogs from './Dialogs';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogsReducer";
import {RedirectIfNotAuth} from "../../HOCs/RedirectIfNotAuth";

type MapStatePropsType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>,
    text: string
    auth: boolean

}

type mapDispatchPropsType = {
    addMessage: (newTextMessage:string) => void,
    onMessageChange: (event: ChangeEvent<HTMLInputElement>) => void

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        text: state.dialogsPage.newTextMessage,
        auth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addMessage:(newTextMessage:string) => dispatch(addMessageActionCreator(newTextMessage)),
        onMessageChange:(event: ChangeEvent<HTMLInputElement>)=> dispatch(onMessageChangeActionCreator(event.currentTarget.value))
    }
}

export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),RedirectIfNotAuth)(Dialogs)

