const apiClient=require("./apiClient");

export default{
    async getCategories(){
        return await apiClient.get('/categories');
    },
    async postCategories(category){
        await apiClient.post('/categories', category);
    },

}