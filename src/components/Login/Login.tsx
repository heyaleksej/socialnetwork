import { useSelector } from "react-redux"
import { AppStateType } from "../../Redux/redux-store"
import {Redirect} from "react-router-dom";

export const Login =()=>{
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (isAuth) return <Redirect to={'/profile'} />

    return <div>
        <div>
            <input placeholder={'login...'}/>
        </div>
        <div>
            <input placeholder={'password...'}/>

        </div>
        <div>
            <input type="checkbox"/> remember me
        </div>
        <div>
            <button> Log in</button>
        </div>
    </div>
}