import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/store";
import {CustomButton} from "../../ SuperButton/CustomButton";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import { CustomInput } from '../../CustomInput/CustomForms';
import {MaxLength, RequiredField} from "../../../Utils/Validators/Validators";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
    message: string
    // onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void

}

type MyPostsFormType = {
    addForm: string
}

const MaxL = MaxLength(10)

const MyPostForm: React.FC<InjectedFormProps<MyPostsFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Enter text..."}
                   component={CustomInput}
                   type={"input"}
                   name={'addForm'}
                   validate={[RequiredField, MaxL]}
            />
        </div>
        <div>
            <button> Add Post</button>
        </div>
    </form>

}
const AddPostReduxForm = reduxForm<MyPostsFormType>({form: 'addForm'})(MyPostForm)


const MyPosts = (props: MyPostsPropsType) => {

    const onSubmit = (values: any) => {
        props.addPost(values.addForm)
    }

    const postsElements = props.posts.map((p, index) => <Post key={index} message={p.message} like={p.like}/>)


    // function addPost() {
    //     console.log('addpost')
    //     props.addPost()
    //
    // }

    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     console.log('onPostChange')
    //     props.onPostChange(e)
    // }

    return <div className={s.postBlock}>

        <h3> My Posts</h3>
        <AddPostReduxForm onSubmit={onSubmit}/>
        {/*<div>*/}
        {/*    <textarea onChange={onPostChange} value={props.message}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <button onClick={addPost}>Add Post</button>*/}
        {/*</div>*/}
        {/*<CustomButton title={'add post'} onClick={addPost}/>*/}
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>;
}


export default MyPosts;

