import {reduxForm, Field, InjectedFormProps} from "redux-form";
import React , {FC} from "react";
import {CustomInput} from "../CustomInput/CustomForms";
import {MaxLength, RequiredField} from "../../Utils/Validators/Validators";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import s from './../CustomInput/CustomForms.module.css'
import {createField, Input} from "../../common/FormControl/FormControl";


export const Login = () => {

    const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }


    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
    )
}

type FormDataType = {
    captcha: string
    email: string
    password: string
    rememberMe: boolean
}

type LoginFormProps = {
    captchaUrl: string | null
}

const MaxL = MaxLength(25)



const LoginForm: FC<InjectedFormProps<FormDataType, LoginFormProps> & LoginFormProps> = ({error, handleSubmit,captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
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
        {captchaUrl && <img className={s.captchaImg} src={captchaUrl}/>}
        {captchaUrl && <button onClick={()=>{}}>&#8635;</button>}
        {captchaUrl && createField
        ('Symbols from image', 'captcha', [RequiredField], Input, {})}



        {error && <div className={s.formSomeError}>

            {error}
        </div>}
        <div>
            <button type={'submit'}> Log in</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm<FormDataType, LoginFormProps>({form: 'login'})(LoginForm)



// export default connect(null, {loginTC})(Login)