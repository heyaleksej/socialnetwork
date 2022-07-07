import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialogs/Dialog';
import Message from './Message/Message';
import {DialogsType, MessageType} from "../../Redux/store";
import Avatar from '../MiniAvatars/Avatar';
import {CustomInput} from "../CustomInput/CustomForms";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MaxLength, RequiredField} from "../../Utils/Validators/Validators";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    text: string
    messages: Array<MessageType>
    addMessage: (message: string) => void
    onMessageChange: (event: ChangeEvent<HTMLInputElement>) => void
    auth: boolean
}

type DialogsFormType = {
    newMessage: string
}


function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.dialogs.map
    (d => <span key={d.id} className={s.avatarImg}>
        <Dialog name={d.name} id={d.id}/>
        <Avatar ava={d.ava}/>
    </span>   // мапиться по диалогам
    )

    let messagesElements = props.messages.map((m, index) => <Message key={index} text={m.text}/>)

    // let messagesAvatar =props.dialogsPage.dialogs.map(m=> <Avatar ava={m.ava}/>)

    const MaxL = MaxLength(50)


    const DialogsForm: React.FC<InjectedFormProps<DialogsFormType>> = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter message..."}
                       component={CustomInput}
                       type="textarea"
                       name={'newMessage'}
                       validate={[RequiredField, MaxL]}
                />
            </div>
            <div>
                <button> Send Message</button>
            </div>
        </form>

    }
    const DialogsReduxForm = reduxForm<DialogsFormType>({form: 'newMessage'})(DialogsForm)

    const onSubmit = (values: any) => {
        props.addMessage(values.newMessage)
    }



    return (
        <div className={s.dialogs}>
            <span className={s.dialogsItems}> {dialogsElements} </span>
            <div className={s.messages}>
                {messagesElements}
                {/*<CustomForms title={'send text'} value={props.text} onChange={onMessageChange} onClick={addMessage}/>*/}
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs;


