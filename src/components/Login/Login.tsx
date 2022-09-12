// import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";
import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import s from './Login.module.css'
import {NavLink, Redirect} from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { FormLabel } from "@mui/material";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const isLoggedIn = useSelector<AppStateType>(state => state.auth.isAuth)
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const dispatch = useDispatch()


    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm();
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length <= 3) {
                errors.password = 'Password should be more than 4 symbols';
            }
            return errors;
        },
    })

    if (isLoggedIn) {
        return <Redirect to={'./profile'}/>
    }

    return (
        <Grid container justifyContent={'center'} className={s.form}>
            <Grid item justifyContent={'center'}>
                <form onSubmit={formik.handleSubmit} className={s.loginForm}>
                    <FormLabel>
                        <p>
                            To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                                        target={'_blank'}>here</a>
                        </p>
                        <p>
                            or use common test account credentials:
                        </p>
                        <p> Email: free@samuraijs.com
                        </p>
                        <p>
                            Password: free
                        </p>
                    </FormLabel>
                    <FormControl>
                        <FormGroup className={s.login}>
                            <h2 style={{textAlign: "center"}}>Sign In</h2>
                            <TextField label="Email"
                                       margin="normal"
                                       color="secondary"
                                       style={{minWidth: '305px'}}
                                       {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email &&
                            <div style={{color: "red"}}>{formik.errors.email}</div>}

                            <TextField type="password"
                                       label="Password"
                                       color="secondary"
                                       margin="normal"
                                       {...formik.getFieldProps('password')}
                            />
                            {formik.touched.email && formik.errors.password &&
                            <div style={{color: "red"}}>{formik.errors.password}</div>}

                            <FormControlLabel label={'Remember me'} control={
                                <Checkbox
                                    color="secondary"
                                    checked={formik.values.rememberMe}
                                    {...formik.getFieldProps('rememberMe')}/>
                            }/>


                            <CustomButton type={'submit'} name={'LOG IN'}/>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )
}


// with redux form
// export const Login = () => {
//     const onSubmit = (formData: FormDataType) => {
//         dispatch(loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha))
//     }
//     if (isAuth) return <Redirect to={'/profile'}/>
//
//     return (
//         <div>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
//     </div>
//     )
// }
//
// type FormDataType = {
//     captcha: string
//     email: string
//     password: string
//     rememberMe: boolean
// }
//
// type LoginFormProps = {captchaUrl: string | null}
// const MaxL = MaxLength(25)
//
//
//
// const LoginForm: FC<InjectedFormProps<FormDataType, LoginFormProps> & LoginFormProps> = ({error, handleSubmit,captchaUrl}) => {
//     return <form onSubmit={handleSubmit}>
//         <div>
//             <Field type={'input'} placeholder={"login..."} component={Input} name={'email'}
//                    validate={[RequiredField, MaxL]}
//             />
//         </div>
//         <div>
//             <Field type={'input'} types={'password'} placeholder={'password...'} component={Input}
//                    name={'password'}
//                    validate={[RequiredField, MaxL]}/>
//         </div>
//         <div>
//             <span>remember me <Field type={"checkbox"} component={Input} name={'rememberMe'}/></span>
//         </div>
//         <div>
//             <button type={'submit'}> Log in</button>
//         </div>
//     </form>
// }
//
// export default connect(null, {loginTC})(Login)};

