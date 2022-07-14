import {v1} from "uuid";
import {deletePost, profileReducer} from "./profileReducer";
import {PostsType} from "./store";

let state = {
    posts: [
        {id: '2', message: 'hello', like: 2},
        {id: '3', message: 'postav like pliz', like: 5}
    ],
    newPostText: '',
    profile: null,
    status: '',
    isAuth: false,
    authId: undefined
}



test('', ()=>{
    let action = deletePost('3')
    let newState = profileReducer(state, action)
expect(newState.posts.length).toBe(1)
})