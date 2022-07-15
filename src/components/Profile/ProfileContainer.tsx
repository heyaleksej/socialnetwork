import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getStatusTC, initialStateType, getUserProfileTC, updateStatusTC} from '../../Redux/profileReducer';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RedirectIfNotAuth} from "../../HOCs/RedirectIfNotAuth";
import { compose } from 'redux';

type MapStatePropsType = initialStateType

type mapDispatchPropsType = {
    getUserProfileTC: (userId: string | undefined) => void
    getStatusTC:(userId: string | undefined)=> void
    updateStatusTC:(status:string)=>void

}
type ProfilePropsType = MapStatePropsType & mapDispatchPropsType

type PathParamsType = {
    userId?: string | undefined
}

export type WithRouterPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileClass extends React.Component<WithRouterPropsType> {

    componentDidMount = () => {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = this.props.authId
            if (!userId){
                this.props.history.push('./login')
            }
        }
        this.props.getUserProfileTC(userId)

        this.props.getStatusTC(userId)
    }

    render() {
        console.log('render profile ')
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusTC={this.props.updateStatusTC}/>
        );

    }
}

let mapToStateToProps = (state: AppStateType): MapStatePropsType => {
    // console.log('mapToStateToProps profile')
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authId: state.auth.id


    }

}
// let URLDataContComp = withRouter(ProfileCont)
// let URLDataContCompAuth = RedirectIfNotAuth(URLDataContComp)

export default compose<React.ComponentType>(RedirectIfNotAuth,
    connect(mapToStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter)
(ProfileClass);