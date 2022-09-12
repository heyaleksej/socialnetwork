import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css'
import profile from './../../common/img/sideabar/speech-svgrepo-com.svg'
import mess from './../../common/img/sideabar/chat-svgrepo-com.svg'
import music from './../../common/img/sideabar/radio-svgrepo-com.svg'
import news from './../../common/img/sideabar/news-svgrepo-com.svg'
import users from './../../common/img/sideabar/job-search-svgrepo-com.svg'


const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li className={s.item}>
                    <NavLink to="/profile" className={s.nav__link} activeClassName={s.active}>
                        <img className={s.contactIcon} src={profile}/>
                        <h3 className={s.contactTitle}>My profile</h3>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className={s.nav__link} activeClassName={s.active}>
                        <img className={s.contactIcon} src={mess}/>
                        <h3 className={s.contactTitle}>Messages</h3>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/friends'} className={s.nav__link} activeClassName={s.active}>
                        <img className={s.contactIcon} src={news}/>
                        <h3 className={s.contactTitle}>Friends</h3>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/music'} className={s.nav__link} activeClassName={s.active}>
                        <img className={s.contactIcon} src={music}/>
                        <h3 className={s.contactTitle}>Music</h3>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/news'} className={s.nav__link} activeClassName={s.active}>
                        <img className={s.contactIcon} src={news}/>
                        <h3 className={s.contactTitle}>News</h3>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/users'} className={s.nav__link} activeClassName={s.active}>
                        <img className={s.contactIcon} src={users}/>
                        <h3 className={s.contactTitle}>Users</h3>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;