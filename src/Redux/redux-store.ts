import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer } from "./sidebarReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store: Store<AppStateType> = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// @ts-ignore
window.store = store