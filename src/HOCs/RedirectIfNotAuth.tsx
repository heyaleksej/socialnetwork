import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

type mstpType = {
    isAuth: boolean
}

const mstp = (state: AppStateType): mstpType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function RedirectIfNotAuth<T>(Component: ComponentType<T>){
    const RedirectComponent = (props: mstpType) => {

            let {isAuth, ...restProps} = props
            if (!isAuth) return <Redirect to='/login'/>
            return <Component {...restProps as T}/>
    }
    return connect(mstp)(RedirectComponent)
}
