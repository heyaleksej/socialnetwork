import React, {ChangeEvent} from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {PostsType} from "../../../Redux/types";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostsType>
    message:string

}

type mapDispatchPropsType = {
    addPost: (newPostText:string) => void,
    // onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: (newPostText:string) => dispatch(addPostActionCreator(newPostText)),
        // onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(onPostChangeActionCreator(e.currentTarget.value))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



