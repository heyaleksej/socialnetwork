import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {initialStateType, setUserProfileTC} from '../../Redux/profileReducer';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RedirectIfNotAuth} from "../../HOCs/RedirectIfNotAuth";
import { compose } from 'redux';

type MapStatePropsType = initialStateType

type mapDispatchPropsType = {
    setUserProfileTC: (userId: string) => void

}
type ProfilePropsType = MapStatePropsType & mapDispatchPropsType

type PathParamsType = {
    userId: string
}

type WithRouterPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileClass extends React.Component<WithRouterPropsType> {

    componentDidMount = () => {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        this.props.setUserProfileTC(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );

    }
}

let mapToStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
    }

}
// let URLDataContComp = withRouter(ProfileCont)
// let URLDataContCompAuth = RedirectIfNotAuth(URLDataContComp)

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapToStateToProps, {setUserProfileTC}),
    RedirectIfNotAuth,
    withRouter)
(ProfileClass);