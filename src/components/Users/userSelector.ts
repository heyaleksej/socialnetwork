import {AppStateType} from "../../Redux/redux-store";
import {createSelector} from "reselect";

export const getUsers = (state: AppStateType)=>{

    return state.usersPage.users
}

const getUsersSelector = createSelector(getUsers,(users:any) => {
    return users
} )
export const getPageSize = (state: AppStateType)=>{

    return state.usersPage.pageSize
}
export const getTotalCount = (state: AppStateType)=>{

    return state.usersPage.totalCount
}
export const getCurrentPage = (state: AppStateType)=>{

    return state.usersPage.CurrentPage
}
export const getIsFetching = (state: AppStateType)=>{

    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType)=>{

    return state.usersPage.followingInProgress
}

export const getAuth = (state: AppStateType)=> {
    return state.auth.isAuth
}
