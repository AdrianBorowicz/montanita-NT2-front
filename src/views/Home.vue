<template>
  <div class="home">
    <div class="grilla-productos">
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
      productList: [
        {id: 1, name: 'CarpaUno', price: 17600, stock: 14, description: 'Carpa 500 lts.', img: './NT2/montanita/src/assets/Carpa.jfif'},
        {id: 2, name: 'Botas trekking', price: 13500, stock: 18, description: 'Botas caballero trekking', img: './NT2/montanita/src/assets/botas-trekking.jfif'},
        {id: 3, name: 'Caña de pescar', price: 5800, stock: 3, description: 'Caña de pescar pro', img: './NT2/montanita/src/assets/cañadepescar.jfif'},
        {id: 4, name: 'Pantalon F2', price: 7900, stock: 1, description: 'Pantalon cargo 10 bolsillos hombre', img: './NT2/montanita/src/assets/pantalon-cargo.jfif'},
      ]

      
    }
  } 
};
</script>
