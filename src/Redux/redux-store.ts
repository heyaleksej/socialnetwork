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

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

export type AppStateType = ReturnType<typeof reducers>

let store: Store<AppStateType> = createStore(reducers);

export default store;