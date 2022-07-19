import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'
import Sidebar from "./Sidebar/Sidebar";
import {DialogsPageType, DialogsType, RootStateType} from "../../Redux/store";

type NavType={

}


const Nav =()=>{
   return (
       <nav className={s.nav}>
           <ul className={s.nav__list}>
               <li className={s.item}>
                   <NavLink to="/profile" className={s.nav__link} activeClassName={s.active}>Profile</NavLink>
               </li>
               <li className={s.item}>
                   <NavLink to="/dialogs" className={s.nav__link} activeClassName={s.active}>Messages</NavLink>
               </li>
               <li className={s.item}>
                   <NavLink to={'/music'} className={s.nav__link} activeClassName={s.active}>Music</NavLink>
               </li>
               <li className={s.item}>
                   <NavLink to={'/news'} className={s.nav__link} activeClassName={s.active}>News</NavLink>
               </li>
               <li className={s.item}>
                   <NavLink to={'/settings'} className={s.nav__link} activeClassName={s.active}>Settings</NavLink>
               </li>
               <li className={s.item}>
                   <NavLink to={'/users'} className={s.nav__link} activeClassName={s.active}>Users</NavLink>
               </li>
           </ul>
           {/*<Sidebar dialogsPage={props.dialogsPage}/>*/}
       </nav>
   )

}

export default Nav;