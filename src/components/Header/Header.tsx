import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOut: () => void
    profilePhoto:string | undefined

}

export const Header = (props: HeaderPropsType) => {
    return (

        <header className={s.header}>
            <div className={s.wrap}>

                {props.isAuth
                    ? <div className={s.loginWrap}>
                        <div className={s.box}>
                            <p className={s.title}>{props.login}</p>
                            <img className={s.ava}
                                 src={props.profilePhoto}
                                 alt='ava'/>
                        </div>
                        <div onClick={props.logOut} className={s.logout}></div>

                    </div>

                    : <NavLink to={'/login'} className={s.login}>log in</NavLink>

                }
            </div>
        </header>
    )

}

export default Header;