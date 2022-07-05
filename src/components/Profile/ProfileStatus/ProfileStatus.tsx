import React, { ChangeEvent } from "react";
import { ProfileInfoPropsType } from "../ProfileInfo/ProfileInfo";

export class ProfileStatus extends React.Component<ProfileInfoPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    ActivateEditMode = () => {
        this.setState({editMode:true})
    }

    DeactivateEditMode = () => {
        this.setState({editMode:false})
        this.props.updateStatusTC(this.state.status)
    }

    onStatusChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status:e.currentTarget.value

        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <h1 onDoubleClick={this.ActivateEditMode}>{this.props.status}</h1>}
                {this.state.editMode &&
                <input autoFocus onBlur={this.DeactivateEditMode} value={this.state.status} onChange={this.onStatusChange}/>}
            </div>)
    }
}
