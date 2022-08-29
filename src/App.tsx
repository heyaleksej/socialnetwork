import React from 'react';
import './App.module.css';
import Nav from './components/Navbar/Nav';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Music from './components/Navbar/Music/Music';
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import {AppStateType} from "./Redux/redux-store";
import {compose} from "redux";
import s from './App.module.css'
import {UsersContainer} from "./components/Users/UsersContainer";
import {Login} from './components/Login/Login';
import {connect} from "react-redux";
import {InitializeApp} from "./Redux/appReducer";
import {Preloader} from "./common/Preloader/Preloader";
import {withSuspense} from "./HOCs/WithSuspense";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Routes } from './components/Routes/Routes';

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
            <div className={s.app}>
                <HeaderContainer/>
                <div className={s.container}>
                    <Nav/>
                    <div className={s.content}>
                       <Routes/>
                    </div>
                </div>
            </div>
        )
    }
}


export default compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, {InitializeApp}))(App);



