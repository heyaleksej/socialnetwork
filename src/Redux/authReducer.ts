const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


type setAuthUserType = ReturnType<typeof setAuthUser>




export type initialStateType = {
    id: number | null,
    login: string | null,
    email: string | null
    isAuth: boolean
}

let initialState: initialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false

}


export const authReducer = (state: initialStateType = initialState, action: setAuthUserType): initialStateType => {
    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {...state,
                ...action.data,
                isAuth: true}


        default:
            return state
    }
}

export const setAuthUser = (userId: number, email: string, login: string) => ({type: SET_AUTH_USER_DATA, data:{userId, email, login}} as const)