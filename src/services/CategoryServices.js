import apiClient from './apiClient';

export default{
    async getCategories(){
        return apiClient.get('/categories');
    },
    async postCategories(category){
        await apiClient.post('/categories', category);
    },

}