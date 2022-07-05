import {useSelector} from "react-redux"
import {AppStateType} from "../../Redux/redux-store"
import {Redirect} from "react-router-dom";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import React from "react";
import {CustomInput} from "../CustomInput/CustomForms";
import {MaxLength, RequiredField} from "../../Utils/Validators/Validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const MaxL = MaxLength(15)


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type={'input'} placeholder={"login..."} component={CustomInput} name={'login'} validate={[RequiredField, MaxL]}
            />
        </div>
        <div>
            <Field type={'input'} placeholder={'password...'} component={CustomInput} name={'password'} validate={[RequiredField, MaxL]}/>

        </div>
        <div>
            <Field type={"checkbox"} component={CustomInput} name={'rememberMe'}/> remember me
        </div>
        <div>
            <button> Log in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {

    }
    // const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    //
    // if (isAuth) return <Redirect to={'/profile'}/>

    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}