<template>
  <div class="home">
    <div class="product-container">
      <ProductoGrilla v-for="product in productList" v-bind:product="product" v-bind:key="product._id"></ProductoGrilla>
    </div>
  </div>
</template>

<script> 
import ProductoGrilla from '../components/ProductoGrilla.vue';
import ProductServices from '../services/ProductServices';


export default {
  name: "Home",
  components: {
    ProductoGrilla
  },
  data(){
    return{
      productList:{
        type: Array,
      }
    }
  },
  created: async function(){
    let rta = await ProductServices.getProducts();
    this.productList = rta.data;
    console.log(this.productList);
  }

  
};
</script>
<style scoped>
  .product-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
  }


</style>
