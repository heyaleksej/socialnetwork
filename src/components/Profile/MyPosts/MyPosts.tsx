import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/types";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {MaxLength, RequiredField} from "../../../Utils/Validators/Validators";
import {Textarea} from "../../../common/FormControl/FormControl";
import SuperButton from "../../ SuperButton/SuperButton";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
    message: string
    userPhoto: string | null | undefined

    // onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void

}

type MyPostsFormType = {
    addForm: string
}


const MyPosts = (props: MyPostsPropsType) => {

    const MyPostForm: React.FC<InjectedFormProps<MyPostsFormType>> = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div className={s.input}>
                <Field placeholder={"Enter text..."}
                       component={Textarea}
                       type={"input"}
                       name={'addForm'}
                       validate={[RequiredField, MaxL]}
                />
                <div>
                    <SuperButton name={"Add Post"} cn={'null'}/>
                </div>

            </div>

        </form>

    }

    const MaxL = MaxLength(10)

    const AddPostReduxForm = reduxForm<MyPostsFormType>({form: 'addForm'})(MyPostForm)

    const onSubmit = (values: any) => {
        props.addPost(values.addForm)
    }

    const postsElements = props.posts.map((p, index) =>
        <Post key={index}
              message={p.message}
              like={p.like}
              userPhoto={props.userPhoto}
        />)


    return <div className={s.postBlock}>

        <h3> My Posts</h3>
        <AddPostReduxForm onSubmit={onSubmit}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>;
}


export default MyPosts;

