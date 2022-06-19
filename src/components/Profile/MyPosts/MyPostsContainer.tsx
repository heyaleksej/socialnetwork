import React, {ChangeEvent} from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

type MyPostsContainerPropsType = {
    // posts: Array<PostsType>
    // message: string
    // dispatch: (action: ActionsTypes) => void

}


const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                function addPost() {
                    store.dispatch(addPostActionCreator(store.getState().profilePage.newPostText))
                }

                const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(onPostChangeActionCreator(e.currentTarget.value))
                }
            return <MyPosts addPost={addPost} onPostChange={onPostChange} posts={store.getState().profilePage.posts} message={store.getState().profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )

}
export default MyPostsContainer;

