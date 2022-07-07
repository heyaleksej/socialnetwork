import {Dispatch} from "redux";
import {AuthApi} from "../DAL/api";
import {FormAction, stopSubmit} from "redux-form";
import { BaseThunkType } from "./redux-store";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


type setAuthUserType = ReturnType<typeof setAuthUser>


type ThunkType = BaseThunkType<setAuthUserType | FormAction>


export type initialStateType = {
    id: string | undefined,
    login: string | null,
    email: string | null
    isAuth: boolean
}

let initialState: initialStateType = {
    id: undefined,
    login: null,
    email: null,
    isAuth: false

}



export const authReducer = (state: initialStateType = initialState, action: setAuthUserType): initialStateType => {
    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }


        default:
            return state
    }
}

export const setAuthUser = (id: string | undefined, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}} as const)

export const getAuthUserTC = (): any => {
    return (dispatch: Dispatch<setAuthUserType>) => {
                return AuthApi.isAuthorized().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUser(id, email, login, true))
                }

            })}}

export const loginTC = (email: string, password: string, rememberMe: boolean): any => {
    return (dispatch: Dispatch<any>) => {
        AuthApi.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserTC())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}
export const logOut = (): any => (dispatch: Dispatch<setAuthUserType>) => {
            AuthApi.logout().then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUser(undefined, null, null, false))
                }

            })


}



