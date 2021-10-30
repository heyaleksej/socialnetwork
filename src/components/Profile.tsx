import React from 'react';
import s from'./Profile.module.css'


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQyG5V9oSD7hP7SZePDYuC56TCQkLWUt6Rg&usqp=CAU'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div className={s.content}>New Post</div>
                <div>Post1</div>
            </div>
        </div>);


}

export default Profile;