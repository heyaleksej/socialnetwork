import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {withSuspense} from "../../HOCs/WithSuspense";
import DialogsContainer from "../Dialogs/DialogsContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Music from "../Navbar/Music/Music";
import News from "../Navbar/News/News";
import Settings from "../Navbar/Settings/Settings";
import {UsersContainer} from "../Users/UsersContainer";
import {Login} from "../Login/Login";
import Friends from "../Users/Friends/Friends";
import {FriendsContainer} from "../Users/Friends/FriendsContainer";


export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/friends' component={FriendsContainer}/>
            <Route path='/users' component={UsersContainer}/>
            <Route path='/login' component={Login}/>
            <Route path='*' render={() => <div>404</div>}/>
        </Switch>
    )
}





