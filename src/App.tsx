import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import {Route, withRouter} from "react-router-dom";
import Music from './components/Navbar/Music/Music';
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import {AppStateType} from "./Redux/redux-store";
import {compose} from "redux";
// import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
// import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {InitializeApp} from "./Redux/appReducer";
import {Preloader} from "./common/Preloader/Preloader";
import {withSuspense} from "./HOCs/WithSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


type MapStateToPropsType = {
    initialized: boolean
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})


class App extends React.Component<any, any> {

    componentDidMount() {
        this.props.InitializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/login' component={Login}/>

                </div>
            </div>
        )
    }
}


export default compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, {InitializeApp}))(App);



