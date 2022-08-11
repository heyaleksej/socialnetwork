import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountMenu from "./AccountMenu";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOut: () => void
    profilePhoto: string | undefined

}

export const Header = (props: HeaderPropsType) => {

    return (

        <header className={s.header}>
            <div className={s.wrap}>

                {props.isAuth
                    ? <AccountMenu logOut={props.logOut}
                                   ava={props.profilePhoto}
                                   login={props.login}
                    />

                    : <NavLink to={'/login'} className={s.login}>log in</NavLink>
                }
            </div>
        </header>
    )

}

export default Header;