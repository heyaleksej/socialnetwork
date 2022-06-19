import React, {ChangeEvent} from 'react';
import {ActionsTypes, DialogsType, MessageType} from "../../Redux/store";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
import store from "../../Redux/redux-store";

type DialogsContainerPropsType = {
    // dialogs: Array<DialogsType>
    // dispatch: (action: ActionsTypes) => void
    // text: string
    // messages: Array<MessageType>
}

function DialogsContainer(props: DialogsContainerPropsType) {


    return (
        <StoreContext.Consumer>
            {(store) => {

                const addMessage = () => store.dispatch(addMessageActionCreator(store.getState().dialogsPage.newTextMessage))

                const onMessageChange = (event: ChangeEvent<HTMLInputElement>) => store.dispatch(onMessageChangeActionCreator(event.currentTarget.value))

                return <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} dialogs={store.getState().dialogsPage.dialogs}
                                messages={store.getState().dialogsPage.messages} text={store.getState().dialogsPage.newTextMessage}/>
            }
            }
        </StoreContext.Consumer>

    )

}

export default DialogsContainer;


