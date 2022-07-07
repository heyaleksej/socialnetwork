import {Dispatch} from "redux";
import {getAuthUserTC} from "./authReducer";
import {getUserProfileTC} from "./profileReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'


type setInitializedType = ReturnType<typeof InitializedSuccess>


type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false


}


export const appReducer = (state: initialStateType = initialState, action: setInitializedType): initialStateType => {
    switch (action.type) {

        case SET_INITIALIZED:
            return {
                ...state, initialized: true
            }
        default:
            return state
    }
}

export const InitializedSuccess = () => ({type: SET_INITIALIZED} as const)

//thunk
export const InitializeApp = () => (dispatch: Dispatch<any>) => {

    let promise = dispatch(getAuthUserTC())

    Promise.all([promise]).then(() => {
        dispatch(InitializedSuccess())
    })
}







