import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:
         {'API-KEY': '062989f1-b329-4c2d-9014-8c47e503da9a'}    
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get('users',
        {params: {page: currentPage, count: pageSize}}).then(response => response.data)
},

    getUser(user) {
       return instance.get('profile/' + user).then(response => response.data)
    },

    getAuth(){
        return instance.get('auth/me').then(response => response.data)
    },

    getFollow(id) {
        return instance.post('follow/' + id).then(response => response.data)
    },

    getUnfollow(id) {
        return instance.delete('follow/' + id).then(response => response.data)
    }
}