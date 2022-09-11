import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialogs/Dialog';
import Message from './Message/Message';
import {DialogsType, MessageType} from "../../Redux/types";
import Avatar from '../MiniAvatars/Avatar';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MaxLength, RequiredField} from "../../Utils/Validators/Validators";
import {Textarea} from "../../common/FormControl/FormControl";
import CustomButton from '../CustomButton/CustomButton';

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
    let dialogsElements = props.dialogs.map(d => <span key={d.id} className={s.dialogItem}>
        <Dialog name={d.name} id={d.id}/>
        <Avatar ava={d.ava}/>
    </span>   // мапимся по диалогам
    )

    let messagesElements = props.messages.map((m, index) => <Message key={index} text={m.text}/>)

    const MaxL = MaxLength(50)

    const finalClassName = `${s.btn}`

    const DialogsForm: React.FC<InjectedFormProps<DialogsFormType>> = (props) => {
        return <form className={s.box} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter message..."}
                       component={Textarea}
                       type="textarea"
                       name={'newMessage'}
                       validate={[RequiredField, MaxL]}
                       className={s.textarea}
                />
            </div>
            <div style={{padding:'17px 0'}}>
                <CustomButton name={'Send' + ' ' + '\u27A4'} cn={finalClassName}/>
            </div>
        </form>
    }
    const DialogsReduxForm = reduxForm<DialogsFormType>({form: 'newMessage'})(DialogsForm)

    const onSubmit = (values: any) => props.addMessage(values.newMessage)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                <div className={s.dialogList}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messageList}>
                    {messagesElements}
                </div>
                <DialogsReduxForm  onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs;


