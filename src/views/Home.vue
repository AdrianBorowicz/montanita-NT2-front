<template>
  <div class="home">
    <div class="grid">
        <ProductoGrilla
          v-for="product in productList"
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
        //console.log(this.productList);
        console.log(data)
      })
      .catch((err) => {
        alert('Estamos teniendo dificultades, por favor intentelo luego.');
        console.log(err)
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
