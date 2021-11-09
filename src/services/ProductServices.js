import apiClient from 'apiClient';

export default{
    async getProducts(){
        return await apiClient.getProducts('/products');
    },
    async postProducts(product){
        await apiClient.post('/products', product);
    },
    async getProductById(id){
        return await apiClient.getProductById('/products/'+id);
    },
    

}