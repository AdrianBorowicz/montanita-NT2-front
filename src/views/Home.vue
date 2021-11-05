<template>
  <div class="home">
    <div class="product-container">
      <ProductoGrilla v-for="product in productList" v-bind:producto="product" v-bind:key="product.id"></ProductoGrilla>
    </div>
  </div>
</template>

<script>
import ProductoGrilla from '../components/ProductoGrilla.vue'

export default {
  name: "Home",
  components: {
    ProductoGrilla
  },
  data(){
    return{
      productList: this.getProducts,
    }
  },
  computed:{
    getProducts: function(){
      return{}
    }
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
