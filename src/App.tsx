import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import {BrowserRouter, Route} from "react-router-dom";
import Music from './components/Navbar/Music/Music';
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import {ActionsTypes} from "./Redux/store";
import  {AppStateType} from "./Redux/redux-store";
import {Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileCont from "./components/Profile/ProfileCont";
import HeaderContainer from "./components/Header/HeaderContainer";



type AppPropsType = {
    store: Store<AppStateType>;
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
    const state = props.store.getState()

    return (
        <>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Nav dialogsPage={state.dialogsPage}/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' component={ProfileCont}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/users' component={UsersContainer}/>

                    </div>
                </div>
            </BrowserRouter>
        </>)
}


export default App;
