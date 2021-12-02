<template>
  <div class="product-card">
    <router-link to="{name: 'DetalleProducto', params:{product: this.product}}">
      <img class="medium" src="{{product.image}}" alt="" />
    <div class="card-body">
        <h2>{{ product.name }}</h2>
      {{product.category_id.name}}
      <label class="price">$ {{ product.price }}</label>
    </div>
    <div>
      <button btn btn-danger btn-sm @click="agregar(product)" >Agregar</button>
      <!-- <input v-model.number="cantidad" type="number" min="1" max="10" placeholder="1" default=1> -->
    </div>
      </router-link>
  </div>
</template>

<script>
import {useStore} from 'vuex';

export default {
  name: "ProductoGrilla",
  props: {
    product:{
      type: Object,
    }
  },
  methods: {
  },
  setup(){
    const store=useStore()
    const agregar=(product, cantidad)=>{
      store.dispatch('agregarAlCarrito', product, cantidad);
    }
    return {agregar}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-card {
  border: solid 1px;
  border-radius: 10px;
  min-height: 200px;
  font-weight: bold;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
}
</style>
