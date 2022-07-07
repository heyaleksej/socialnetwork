import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean


}

type mapDispatchPropsType = {
    logOut:()=>void
}

export type HeaderPropsType = MapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps =(state: AppStateType) =>{
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect (mapStateToProps ,{ logOut}) (HeaderContainer);