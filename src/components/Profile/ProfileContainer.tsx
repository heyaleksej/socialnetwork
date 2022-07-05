import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getStatusTC, initialStateType, setUserProfileTC, updateStatusTC} from '../../Redux/profileReducer';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RedirectIfNotAuth} from "../../HOCs/RedirectIfNotAuth";
import { compose } from 'redux';

type MapStatePropsType = initialStateType

type mapDispatchPropsType = {
    setUserProfileTC: (userId: string) => void
    getStatusTC:(userId: string)=> void
    updateStatusTC:(status:string)=>void

}
type ProfilePropsType = MapStatePropsType & mapDispatchPropsType

type PathParamsType = {
    userId: string
}

export type WithRouterPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileClass extends React.Component<WithRouterPropsType> {

    componentDidMount = () => {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        this.props.setUserProfileTC(userId)
        setTimeout(()=>{

        this.props.getStatusTC(userId)},1000)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusTC={this.props.updateStatusTC}/>
        );

    }
}

let mapToStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }

}
// let URLDataContComp = withRouter(ProfileCont)
// let URLDataContCompAuth = RedirectIfNotAuth(URLDataContComp)

export const ProfileContainer = compose<React.ComponentType>(RedirectIfNotAuth,
    connect(mapToStateToProps, {setUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter)
(ProfileClass);