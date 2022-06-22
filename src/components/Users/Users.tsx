import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userimg from './../../common/img/Sample_User_Icon.png'
import s from './Users.module.css'

export const Users = (props: UsersPropsType) => {

    // if (props.users.length === 0 ) {
    //     props.setUser([ {id: v1(), name: 'ivan', location: {city: 'msk', country: 'russia'}, status: 'lol', followed: true},
    //         {id: v1(), name: 'stas', location: {city: 'lvov', country: 'Ukraine'}, status: 'kek', followed: true},
    //         {id: v1(), name: 'petya', location: {city: 'berlin', country: 'germany'}, status: 'heey', followed: false}])
    // }

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

            props.setUser(response.data.items)
        })
    }
    return <div>
        {props.users.map((m, index) => <div key={m.id}>
                    <span>
                        <div>
                            <img src={m.photos.small != null ? m.photos.small : userimg} className={s.img}/>
                        </div>
                        <div>
                            {m.followed
                            ? <button onClick={() => {props.follow(m.id)}}>follow</button>
                            : <button onClick={()=> {props.unfollow(m.id)}}>unfollow</button>}
                        </div>
                    </span>
                <span>{m.name}</span>
            </div>
        )}

    </div>

}