import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getStatusTC, initialStateType, getUserProfileTC, updateStatusTC, addNewPhoto, saveProfile} from '../../Redux/profileReducer';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RedirectIfNotAuth} from "../../HOCs/RedirectIfNotAuth";
import { compose } from 'redux';
import {ProfileType} from "./ProfileInfo/ProfileInfo";
import {followTC, unFollowTC} from "../../Redux/userReducer";
import {getFollowingInProgress} from "../Users/userSelector";

type MapStatePropsType = initialStateType

type mapDispatchPropsType = {
    getUserProfileTC: (userId: string | undefined) => void
    getStatusTC:(userId: string | undefined)=> void
    updateStatusTC:(status:string)=>void
    addNewPhoto:(file:any)=>void
    saveProfile: (profile: ProfileType) => Promise<any>
    follow: (userID: string) => void,
    unfollow: (userID: string) => void


}
type ProfilePropsType = MapStatePropsType & mapDispatchPropsType

type PathParamsType = {
    userId?: string | undefined
}

export type WithRouterPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<WithRouterPropsType> {

    refreshProfile(){
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


    componentDidMount = () => {
       this.refreshProfile()
    }
    componentDidUpdate(prevProps:any) {
        if (this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile()

    }

    render() {
        console.log('render profile ')
        return (
            <Profile {...this.props}
                     isOwner ={!this.props.match.params.userId }
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusTC={this.props.updateStatusTC}
                     addNewPhoto={this.props.addNewPhoto}
                     saveProfile={this.props.saveProfile}
            />
        );

    }
}

let mapToStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authId: state.auth.id,

    }

}
// let URLDataContComp = withRouter(ProfileCont)
// let URLDataContCompAuth = RedirectIfNotAuth(URLDataContComp)

export default compose<React.ComponentType>(RedirectIfNotAuth,
    connect(mapToStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC, addNewPhoto, saveProfile, followTC, unFollowTC}),
    withRouter)
(ProfileContainer) as React.FunctionComponent<any>