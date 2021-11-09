const apiClient = require('apiClient');

export default{
    async getLogin(user){
        return await apiClient.get('/Users', user);
    }
}
