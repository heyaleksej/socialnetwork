import {reduxForm, Field, InjectedFormProps} from "redux-form";
import React from "react";
import {CustomInput} from "../CustomInput/CustomForms";
import {MaxLength, RequiredField} from "../../Utils/Validators/Validators";
import {connect, useSelector} from "react-redux";
import {loginTC} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import s from './../CustomInput/CustomForms.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const MaxL = MaxLength(25)


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type={'input'} placeholder={"login..."} component={CustomInput} name={'email'}
                   validate={[RequiredField, MaxL]}
            />
        </div>
        <div>
            <Field type={'input'} types={'password'} placeholder={'password...'} component={CustomInput}
                   name={'password'}
                   validate={[RequiredField, MaxL]}/>

        </div>
        <div>
            <Field type={"checkbox"} component={CustomInput} name={'rememberMe'}/> remember me
        </div>
        {props.error && <div className={s.formSomeError}>
            {props.error}
        </div>}
        <div>
            <button> Log in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (isAuth) return <Redirect to={'/profile'}/>

    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}

export default connect(null, {loginTC})(Login)