import axios from "axios";
import { ProfileType } from "../components/Profile/ProfileInfo/ProfileInfo";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '25ed7397-2159-4a11-ae4a-058a27dc7e4f'
    }
})

export const UsersApi = {

    getUsers(CurrentPage: number, pageSize: number){
        return instance.get(`users?page=${CurrentPage}&count=${pageSize}`).then(response => response.data)
    },

    getUserProfile(userId: string){
        return ProfileApi.getUserProfile(userId)

    },
    followUser(id: string) {
        return instance.post(`follow/` + id, {}).then(response => response.data)

    },

    unFollowUser(id: string) {
        return instance.delete(`follow/` + id).then(response => response.data)

    }
}

export const AuthApi = {
    isAuthorized(){
        return instance.get( `auth/me`).then(response => response.data)
    },

    login(email: string, password:string, rememberMe:boolean, captcha: string){
        return instance.post('/auth/login',{email, password, rememberMe, captcha}).then(response =>response.data)
    },

    logout(){
        return instance.delete('/auth/login').then(response =>response.data)
    }

}

export const ProfileApi = {
    getUserProfile(userId: string){
        return instance.get(`profile/` + userId).then(response => response.data)

    },

    getStatus(userId: string){
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },

    updateStatus(status: string){
        return instance.put(`profile/status`, {status})
    },

    safePhoto(photo:any){
        let formData = new FormData()
        formData.append('image',photo)
        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },

    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile).then(response => response.data);
    }

}

export const SecureApi = {
    getCaptchaUrl() {
        debugger
        return instance.get(`security/get-captcha-url`).then(response => response.data);
    }
}




