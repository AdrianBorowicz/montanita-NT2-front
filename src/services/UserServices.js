import apiClient from './apiClient.js'

export default {
    async postUser(user) {
        return await apiClient.post('/signin', user);
            
    }
}
