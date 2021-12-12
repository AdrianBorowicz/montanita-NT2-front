<template>
  <div class="product-card">
    <div class="image">
      <img
        class="medium"
        :src="'http://127.0.0.1:8887/' + product.image"
        alt="Error"
      />
    </div>
    <div class="card-body">
      <router-link :to="'/DetalleProducto/'+product._id"  >
        <h3>{{ product.name }}</h3>
      </router-link>
      <h5>{{ product.category_id.name }}</h5>
      <label class="price">$ {{ product.price }}</label>
    </div>
    <div>
      <button btn btn-danger btn-sm @click="agregar(product)">Agregar</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "ProductoGrilla",
  props: {
    product: {
      type: Object,
    },
  },
  methods: {},
  setup() {
    const store = useStore();
    const agregar = (product) => {
      store.dispatch("agregarAlCarrito", product);
    };
    return { agregar };
  },
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

.medium {
  height: 150px;
  width: auto;
}
</style>
