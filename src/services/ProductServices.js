import apiClient from './apiClient';

export default{
    getProducts: ()=>{
        return apiClient.get('/products');
    },
    postProducts(product){
        apiClient.post('/products', product);
    },
    getProductById(id){
        return apiClient.getProductById('/products/'+id);
    },
    

}