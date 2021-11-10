import apiClient from './apiClient.js'

export default{
    async postUsers(user){
        return await (await apiClient.post('/user', user)).data;
    },
}
