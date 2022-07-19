import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserTC, logOut, setProfileLPhoto} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
    profilePhoto: string | undefined
    userId: string | undefined



}

type mapDispatchPropsType = {
    getAuthUserTC: () => void
    logOut:()=>void
    setProfileLPhoto: (userId: string | undefined) => void


}

export type HeaderPropsType = MapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserTC();
        if (this.props.userId) {
            this.props.setProfileLPhoto(this.props.userId);
        }
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps =(state: AppStateType):MapStatePropsType =>{
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        profilePhoto:state.auth.profilePhoto,
        userId: state.auth.id,

    }
}

export default connect(mapStateToProps ,{ getAuthUserTC, logOut, setProfileLPhoto}) (HeaderContainer);