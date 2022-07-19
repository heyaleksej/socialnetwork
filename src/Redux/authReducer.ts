import {Dispatch} from "redux";
import {AuthApi, SecureApi} from "../DAL/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


type setAuthUserType = ReturnType<typeof setAuthUser>
type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>

type actionType = getCaptchaUrlSuccessType | setAuthUserType


export type initialStateType = {
    id: string | undefined,
    login: string | null,
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}

let initialState: initialStateType = {
    id: undefined,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null

}


export const authReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {

        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }


        default:
            return state
    }
}

export const setAuthUser = (id: string | undefined, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_AUTH_USER_DATA, payload: {id, email, login, isAuth}} as const)

export const getCaptchaUrlSuccess = (captchaUrl:string) =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const)

export const getAuthUserTC = (): any => {
    return (dispatch: Dispatch<setAuthUserType>) => {
        return AuthApi.isAuthorized().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUser(id, email, login, true))
            }

        })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string): any => {
    return (dispatch: Dispatch<any>) => {
        AuthApi.login(email, password, rememberMe, captcha).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserTC())
            } else {
                if (data.resultCode === 10){
                    dispatch(getCaptchaUrl())
                }
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

export const getCaptchaUrl = (): any => (dispatch: Dispatch<actionType>) => {
    SecureApi.getCaptchaUrl().then(data => {

        dispatch(getCaptchaUrlSuccess(data.url))

})


}


