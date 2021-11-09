<template>
  <div class="product-card">
    <a href="product.html">
      <img
        class="medium"
        src={{producto.img}}
        alt="product"
      />
    </a>
    <div class="card-body">
      <a href="product.html">
        <h2>{{product.name}}</h2>
      </a>
      <div class="price">{{product.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductoGrilla",
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    display: block;
  }
  .product-card{
    border: 0.1rem #c0c0c0 solid;
    background-color: #f8f8f8f8;
    border-radius: 0.5rem;
    margin: 1rem;
  }
  .card-body{
    padding: 0.1rem;
  }
  .price{
    font-size: 1rem;
  }

</style>
