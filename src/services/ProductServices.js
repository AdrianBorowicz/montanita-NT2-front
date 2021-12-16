import apiClient from './apiClient';

export default {
    async getProducts() {
        return apiClient.get('/products');
    },
    postProducts(products, token) {
        apiClient.post('/products', products, { headers: { "authorization": `Bearer ${token}` } });
    },
    getProductById(_id) {
        return apiClient.get('/product/' + _id);
    },
    postProduct(product, token) {
        return apiClient.post('/product', product, { headers: { "authorization": `Bearer ${token}` } })
    },
    deleteProductById(_id, token) {
        return apiClient({
            method: 'delete',
            url: '/product/'+_id,
            headers: { "authorization": `Bearer ${token}` },
        })
    }


}