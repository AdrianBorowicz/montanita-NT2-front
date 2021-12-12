import apiClient from './apiClient';

export default{
    async getProducts(){
        return await apiClient.get('/products');
    },
    postProducts(product){
        apiClient.post('/products', product);
    },
    getProductById(_id){
        return apiClient.get('/product/'+_id);
    },
    

}