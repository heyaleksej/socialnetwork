import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQyG5V9oSD7hP7SZePDYuC56TCQkLWUt6Rg&usqp=CAU'/>
            </div>
            <MyPosts/>
        </div>);


}

export default Profile;