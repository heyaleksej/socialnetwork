import React from "react";
import { Store } from "redux";
import {AppStateType} from "./Redux/redux-store";

const storeContext = React.createContext({} as Store<AppStateType>)

export default storeContext;