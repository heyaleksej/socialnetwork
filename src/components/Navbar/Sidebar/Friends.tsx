import React from 'react';
import {DialogsPageType, DialogsType} from "../../../Redux/store";
import Dialog from "../../Dialogs/Dialogs/Dialog";
import s from './Sidebar.module.css'
import Avatar from "../../MiniAvatars/Avatar";

type FriendsPropsType={
    dialogsPage: DialogsPageType

}


function Friends(props:FriendsPropsType) {
    let friendsElements = props.dialogsPage.dialogs.map(d => <span> {d.name}  <Avatar
        ava={d.ava}/>
        </span>   // маписаться по диалогам обънди
    )
    return (
    <span>
        {friendsElements}
        </span>

    )
}

export default Friends;