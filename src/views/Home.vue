<template>
  <div class="home" v-if="this.$store.state.productos!=null">
    <div class="grid">
      <ProductoGrilla
        v-for="product in this.$store.state.productos"
        v-bind:product="product"
        v-bind:key="product._id"
      ></ProductoGrilla>
    </div>
  </div>
</template>

<script>
import ProductoGrilla from "../components/ProductoGrilla.vue";
import ProductServices from "../services/ProductServices";

export default {
  name: "Home",
  components: {
    ProductoGrilla,
  },
  data() {
    return {
      productList: {
        type: Array,
      },
    };
  },
  created: async function () {
    ProductServices.getProducts()
      .then((data) => {
        this.productList = data.data;
        this.$store.state.productos = data.data;
      })
      .catch((err) => {
        alert("Estamos teniendo dificultades con la carga de los productos, por favor intentelo luego.");
        console.log(err);
      });
  },
};
</script>
<style scoped>
.grid {
  width: 90%;
  /* max-width: 1200px; */
  margin: auto;
  padding: 25px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
