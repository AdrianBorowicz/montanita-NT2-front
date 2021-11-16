<template>
  <div class="product-card">
    <router-link to="/detalleProducto/:id">
      <img class="medium" src="{{product.image}}" alt="product" />
    </router-link>
    <div class="card-body">
      <a href="product.html">
        <h2>{{ product.name }}</h2>
      </a>
      {{ product.category_id.name }}
      <label class="price">$ {{ product.price }}</label>
    </div>
    <div>
      <button @click="btnAgregarCarrito">Agregar</button>
      <input type="number" value="1" min="1" max="10">
    </div>
    {{this.$store.state.carrito}}
  </div>
</template>

<script>
export default {
  name: "ProductoGrilla",
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    btnAgregarACarrito() {
      this.$store.commit('ADDTOCART', this.product)
    },
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
</style>
