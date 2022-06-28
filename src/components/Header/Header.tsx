import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import {debuglog} from "util";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

const Header =(props: HeaderPropsType)=>{
   return (

        <header className={s.header}>
            <img src='https://s.starladder.com/uploads/team_logo/d/4/d/3/ce3c2349c7e3a70dac35cf4a28c400b9.png'></img>

            <div className={s.login}>
                {props.isAuth ? props.login:<NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
   )

}

export default Header;