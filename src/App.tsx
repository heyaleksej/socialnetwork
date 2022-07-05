import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Music from './components/Navbar/Music/Music';
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import {ActionsTypes} from "./Redux/store";
import  {AppStateType} from "./Redux/redux-store";
import {compose, Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Login } from './components/Login/Login';
import {RedirectIfNotAuth} from "./HOCs/RedirectIfNotAuth";
import {connect} from "react-redux";



// type AppPropsType = {
//     store: Store<AppStateType>;
//     dispatch: (action: ActionsTypes) => void
// }

class App extends React.Component {

    componentDidMount() {
    }

    render() {

        return (
            <>
                <BrowserRouter>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <Nav/>
                        <div className='app-wrapper-content'>
                            {/*<Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>*/}
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?' component={ProfileContainer}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/news' component={News}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/users' component={UsersContainer}/>
                            <Route path='/login' component={Login}/>

                        </div>
                    </div>
                </BrowserRouter>
            </>)
    }
}


export default App;
