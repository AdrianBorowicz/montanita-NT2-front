const apiClient=require("./apiClient");

export default{
    getCategories(){
        return apiClient.get('/categories');
    },
    postCategories(category){
        apiClient.post('/categories', category);
    },

}