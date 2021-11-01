import React from "react";
import s from './ProfileInfo.module.css'


export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQyG5V9oSD7hP7SZePDYuC56TCQkLWUt6Rg&usqp=CAU"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}