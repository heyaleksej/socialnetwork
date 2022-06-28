import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUser} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(response => {

            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
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