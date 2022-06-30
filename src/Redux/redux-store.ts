import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer } from "./sidebarReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

/*
export type StoreType= typeof store

type ReducersType= typeof reducers
export type AppStateType =ReturnType<ReducersType>
*/

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store: Store<AppStateType> = createStore(rootReducer, applyMiddleware(thunk));

export default store;