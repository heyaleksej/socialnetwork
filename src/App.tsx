import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from './components/Navbar/Music/Music';
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path ='/dialogs' component={Dialogs}/>
                <Route path ='/profile' component={Profile}/>
                <Route path ='/music' component={Music}/>
                <Route path ='/news' component={News}/>
                <Route path ='/settings' component={Settings}/>

            </div>
        </div>
        </BrowserRouter>)
}

export default App;
