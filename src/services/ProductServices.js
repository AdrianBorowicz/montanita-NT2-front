import apiClient from './apiClient';

export default{
    async getProducts(){
        return await apiClient.get('/products');
    },
    postProducts(product){
        apiClient.post('/products', product);
    },
    getProductById(id){
        return apiClient.getProductById('/products/'+id);
    },
    

}