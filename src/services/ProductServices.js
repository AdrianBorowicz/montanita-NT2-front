import apiClient from 'apiClient';

export default{
    getProducts(){
        return apiClient.getProducts('/products');
    },
    postProducts(product){
        apiClient.post('/products', product);
    },
    getProductById(id){
        return apiClient.getProductById('/products/'+id);
    },
    

}