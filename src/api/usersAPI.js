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

    getFollow(id) {
        return instance.post('follow/' + id).then(response => response.data)
    },

    getUnfollow(id) {
        return instance.delete('follow/' + id).then(response => response.data)
    },
}

export const profileAPI = {

    getUser(user) {
       return instance.get('profile/' + user).then(response => response.data)
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId).then(response => response.data)
    },

    updateStatus(status) {
        return instance.put('profile/status', {status}).then(response => response.data)
    }
}

export const authAPI = {
    getAuth(){
        return instance.get('auth/me')
    },
    getLogin(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe}).then(
            response => response.data)
    },
    getLogout() {
        return instance.delete('auth/login').then(response => response.data)
    }
}