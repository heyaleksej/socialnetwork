import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserTC} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean


}

type mapDispatchPropsType = {
    setAuthUserTC:()=> void
}

export type HeaderPropsType = MapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.setAuthUserTC()
    }

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

export default connect (mapStateToProps ,{setAuthUserTC}) (HeaderContainer);