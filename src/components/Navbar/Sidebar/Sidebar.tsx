import React from 'react';
import {DialogsPageType, DialogsType} from "../../../Redux/state";
import Dialog from "../../Dialogs/Dialogs/Dialog";
import Friends from './Friends';
import s from './Sidebar.module.css'
import Avatar from "../../MiniAvatars/Avatar";

type SidebarPropsType={
    dialogsPage: DialogsPageType

}

function Sidebar (props:SidebarPropsType) {

    return (
        <div className={s.friends}>
            <Friends dialogsPage={props.dialogsPage}/>

        </div>
    )
}

export default Sidebar;