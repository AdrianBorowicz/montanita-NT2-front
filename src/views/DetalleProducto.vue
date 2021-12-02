<template>
  <div>
    {{ this.$router.params }}
  </div>
</template>

<script>
//import router from '../router/index'
export default {
  name: "DetalleProducto",
  props: {
      product: this.$router.params
  },
};
</script>

<style>
</style>