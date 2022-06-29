import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '25ed7397-2159-4a11-ae4a-058a27dc7e4f'
    }
})


export const getUsers = (CurrentPage: number, pageSize: number) => {
    return instance.get(`users?page=${CurrentPage}&count=${pageSize}`).then(response => response.data)

}

export const getHeader = () => {
    return instance.get( `auth/me`).then(response => response.data)

}

export const getUserProfile = (userId: string) => {
    return instance.get(`profile/` + userId).then(response => response.data)

}

export const followUser = (id: string) => {
    return instance.post(`follow/` + id, {}).then(response => response.data)

}

export const unFollowUser = (id: string) => {
    return instance.delete(`follow/` + id).then(response => response.data)

}