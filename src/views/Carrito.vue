<template>

 <!-- probando -->

  <div class="carrito">
    <h1>Carrito de compras</h1>
<!--     <table class="items-grid">
      <thead>
        <th>Nombre</th>
        <th>Imagen</th>
        <th>Cantidad</th>
        <th>Precio Ind.</th>
        <th>Precio Subtot.</th>
      </thead>
      <tbody>
        <tr v-for="item in this.$store.state.carrito" v-bind:key="item.idProducto">
          <input type="number" value="1" min="1" max="20">
          <button>Agregar</button>
        </tr>
      </tbody>
    </table> -->

    
  </div>
</template>

<style scoped>
  
</style>

<script>


export default {
  name: "carrito",
  data(){
    return {
      
    }
  },
  props:{
    
  },
  methods:{
  }
}
</script>