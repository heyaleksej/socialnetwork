import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer } from "./sidebarReducer";
import {ActionsTypes} from "./store";

/*
export type StoreType= typeof store

type ReducersType= typeof reducers
export type AppStateType =ReturnType<ReducersType>
*/

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store: Store<AppStateType> = createStore(rootReducer);

export default store;