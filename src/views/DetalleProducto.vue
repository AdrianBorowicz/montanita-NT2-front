<template>
  <div class="contenedor">
    <div class="imagecol">
      <img class="image" :src="'http://127.0.0.1:8887/' + this.$store.state.product.image" alt="Error" />
    </div>

    <div class="detailcol">
      <ul>
        <li>
          <h2>{{ this.$store.state.product.name }}</h2>
        </li>
        <li>
          <h5>{{ this.$store.state.product.description }}</h5>
        </li>
        <li>
          <h5>{{ this.$store.state.product.category_id.name }}</h5>
        </li>
        <li>
          <h3>${{ this.$store.state.product.price }}</h3>
        </li>
        <button @click="agregar(this.$store.state.product)">Agregar</button>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex"; 
import ProductServices from "../services/ProductServices";
export default {
  name: "DetalleProducto",
  created: async function () {
    ProductServices.getProductById(this.$route.params._id)
      .then((data) => {
        console.log(data.data)
        //this.product = data.data;
        this.$store.state.product = data.data;
      })
      .catch((err) => {
        alert("Estamos teniendo dificultades con la carga del producto.");
        console.log(err);
      });
  },
    setup() {
    const store = useStore();
    const agregar = (product) => {
      store.dispatch("agregarAlCarrito", product);
    };
    return { agregar };
  },
}

</script>

<style scoped>
  .contenedor{
    display: grid;
    grid-template-columns: 2, 50%;
    width: 90%;
    margin: 10px auto auto auto;
    
  }
  .imagecol{
    grid-column: 1;
    border: black solid 0.1rem;
    border-radius: 1rem;
    max-width: 90%;
    max-height: 90%;
  }
  .image{
    max-width: 150%;
    max-height: 150%;
    margin: 50% auto 50% auto;
    border: black solid 0.1rem;
    border-radius: 1rem;
  }
  .detailcol{
    grid-column: 2;
    margin: auto auto 100% 30%;
    text-align: left;
  }

  ul{
    list-style: none;
    
  }

  li{
    padding: 1rem;
  }

</style>