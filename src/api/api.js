import axios from "axios";



const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-kEY": "c464c4a7-5562-401c-9aef-d2f1673f18cf"
    }
});

export const profileAPI = {
    getProfile(profileId) {
        return instance.get(`profile/` + profileId, {}
        ).then(response => response.data)
    }
}

export const usersAPI = {
    //Функция для получения пользователей
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}
        ).then(response => response.data)
    },
    //Функция для добавления пользователей в друзья
    addFriend(id){
        return instance.post(`follow/${id}`, {}
        ).then(response => response.data)
    },
    //Функция для удаления пользователей из друзья
    delFriend(id){
        return instance.delete(`follow/${id}`,
        ).then(response => response.data)
    }

}

