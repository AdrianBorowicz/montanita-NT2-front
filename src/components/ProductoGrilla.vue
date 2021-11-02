<template>
  <div class="container">
    <img ref=""/>
    <h1>{{producto.name}}</h1>
    <h5>Price: {{producto.price}}</h5>
    


  </div>
</template>

<script>

export default {
  name: "ProductoGrilla",
  props: {
    producto: {
      type: Object,
      default: null,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
