import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'
import Sidebar from "./Sidebar/Sidebar";
import {DialogsPageType, DialogsType, RootStateType} from "../../Redux/store";

type NavType={
    dialogsPage:DialogsPageType

}


const Nav =(props:NavType)=>{
   return (
       <nav className={s.nav}>
           <div className={s.item}>
               <NavLink to="/profile"  activeClassName={s.activeLink}>Profile</NavLink>
           </div>
           <div className={s.item}>
               <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
           </div>
           <div className={s.item}>
               <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
           </div>
           <div className={s.item}>
               <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
           </div>
           <div className={s.item}>
               <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
           </div>
           <div className={s.item}>
               <NavLink to={'/users'} activeClassName={s.activeLink}>Users</NavLink>
           </div>
           <Sidebar dialogsPage={props.dialogsPage}/>
       </nav>
   )

}

export default Nav;