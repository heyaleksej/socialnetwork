import React, {ChangeEvent, useEffect, useState} from "react";
import { ProfileInfoPropsType } from "../ProfileInfo/ProfileInfo";

type ProfileStatusWithHooksType={
    status:string
    updateStatusTC:(status:string)=>void


}

export const ProfileStatusWithHooks =(props:ProfileStatusWithHooksType)=>{
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const ActivateEditMode = () => {
        setEditMode(true)
    }

    const DeactivateEditMode =()=>{
        setEditMode(false)
        props.updateStatusTC(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)

    }

    return (
            <div>
                {!editMode &&
                <h1 onDoubleClick={ActivateEditMode}>{props.status || "----"}</h1>}
                {editMode &&
                <input autoFocus onBlur={DeactivateEditMode} value={status} onChange={onStatusChange}/>}
            </div>)

}
