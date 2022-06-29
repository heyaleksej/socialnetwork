import React from 'react';
import Profile from './Profile';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {initialStateType, ProfileTypeFromServer, setUserProfile } from '../../Redux/profileReducer';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../DAL/api";

type MapStatePropsType = initialStateType

type mapDispatchPropsType = {
    setUserProfile:(profile:ProfileTypeFromServer) => void

}
type ProfilePropsType = MapStatePropsType & mapDispatchPropsType

type PathParamsType = {
    userId: string
}

type WithRouterPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileCont extends React.Component<WithRouterPropsType>{

    componentDidMount = () => {
        let userId = this.props.match.params.userId
        getUserProfile(userId).then(data => {

            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        );

    }
}

let mapToStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
    }

}
let URLDataContComp = withRouter(ProfileCont)

export default connect (mapToStateToProps, {setUserProfile}) (URLDataContComp);