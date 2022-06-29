import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUser} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";
import {getHeader} from "../../DAL/api";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean

}


type mapDispatchPropsType = {
    setAuthUser:(userId: number, email: string, login: string)=> void
}

export type HeaderPropsType = MapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        getHeader().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                this.props.setAuthUser(id, email, login)
            }

        })
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

export default connect (mapStateToProps ,{setAuthUser}) (HeaderContainer);