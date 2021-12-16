<template>
  <div>
    <select
      v-bind:ABMseleccion="ABMseleccion"
      name="ABM"
      v-model="ABMseleccion"
      required="true"
      @change="limpiarFormulario"
    >
      <option value="1">Alta</option>
      <option value="2">Baja / Modificacion</option>
    </select>
    <div>
      <form submit.prevent="ABMseleccion" class="form-group">
        <select v-if="this.ABMseleccion == 2" v-model="selectedProduct">
          <option disabled selected>Selecciona una opción</option>
          <option
            v-for="product in this.productList"
            :key="product._id"
            :value="product"
          >
            {{ product.name }} - {{ product._id }}
          </option>
        </select>
        <input
          v-model="selectedProduct.name"
          type="text"
          required="true"
          placeholder="Nombre"
        />
        <textarea
          v-model="selectedProduct.description"
          placeholder="Descripcion"
        />
        <select v-model="selectedProduct.category_id" required="true">
          <option
            v-for="category in categoryList"
            :key="category._id"
            :value="category"
          >
            {{ category.name }}
          </option>
        </select>
        <input
          v-model="selectedProduct.image"
          required="true"
          type="text"
          placeholder="NombreImagen.extension (guardarla en assets)"
        />
        <input
          v-model="selectedProduct.price"
          type="number"
          min="1"
          required="true"
          placeholder="Precio"
        />
        <button
          v-if="this.ABMseleccion == 1"
          type="button"
          @click="altaProducto"
        >
          Agregar
        </button>
        <div v-else>
          <button type="button" @click="bajaProducto">Eliminar</button>
          <button type="button" @click="actualizarProducto">Modificar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CategoryServices from "../services/CategoryServices";
import ProductServices from "../services/ProductServices";
export default {
  name: "ABMProductos",
  data() {
    return {
      ABMseleccion: 1,
      selectedProduct: {
        _id: "",
        name: "",
        description: "",
        category_id: "",
        price: 0,
        image: "",
      },
      categoryList: [],
      productList: [],
    };
  },
  methods: {
    altaProducto() {
      let product = new Object();
      product = this.selectedProduct;
      product.category_id = this.selectedProduct.category_id._id;
      //this.$store.state.productos.push(this.selectedProduct); NO VA A APARECER EL ID (todavia no tiene)
      ProductServices.postProduct(product, this.$store.state.user.token)
        .then((data) => {
          this.productList.push(data.data.document)
          this.$store.state.productos.push(data.data.document)
          alert("El producto se ha añadido correctamente.");
        })
        .catch((err) => {
          console.log(err);
          alert("Ha habido un problema con la carga del producto.");
        });
      this.limpiarFormulario();
    },
    bajaProducto() {
      //console.log(this.selectedProduct._id)
      if(this.selectedProduct._id!=''){
        ProductServices.deleteProductById(
          this.selectedProduct._id,
          this.$store.state.user.token
        )
          .then((data) => {
            alert(`Se ha borrado el item ${data.data.name}`);
            let i = this.$store.state.productos.indexOf(this.selectedProduct);
            this.$store.state.productos.splice(i, 1);

            let x= this.productList.indexOf(this.selectedProduct);
            this.productList.splice(x,1)

            this.limpiarFormulario();
            console.log(i)
            console.log(this.$store.state.productos)
            console.log(data.data);
          })
          .catch((err) => {
            alert("No se ha podido eliminar el producto seleccionado.");
            console.log(err);
          });}else{
            alert('Seleccione un producto!')
          }
    },

/*     actualizarProducto() {
      ProductServices.postProducts(this.productList, this.$store.state.user.token)
      .then(data=>{
        console.log(data)
      })
      .catch(err=>{
        console.log(err)
      })
    }, */

    limpiarFormulario() {
      this.selectedProduct = {
        _id: "",
        name: "",
        description: "",
        category_id: "",
        price: 0,
        image: "",
      };
    },
  },
  created: async function () {
    CategoryServices.getCategories()
      .then((data) => {
        this.categoryList = data.data;
        //console.log(this.categoryList);
        //console.log(data);
        // Guardo en el store todos los productos obtenidos (esto no deberia de ser asi, pero es la manera mas rapida que encuentro para hacerlo ahora.)
      })
      .catch((err) => {
        alert(
          "Estamos teniendo dificultades con la carga de los categorias, por favor intentelo luego."
        );
        console.log(err);
      });

    ProductServices.getProducts()
      .then((data) => {
        this.productList = data.data;
      })
      .catch((err) => {
        console.log(err);
        alert("Se ha producido un error con la carga de productos.");
      });
  },
};
</script>


<style scoped>
select {
  padding: 0.7em;
  margin-bottom: 0.5rem;
}
form {
  display: grid;
  padding: 0.5em;
  background: #f9f9f9;
  border: 1px solid #c1c1c1;
  margin: 1rem auto 0 auto;
  max-width: 600px;
}
form textarea {
  padding: 0.7em;
  margin-bottom: 0.5rem;
}
form input {
  background: #fff;
  border: 1px solid #9c9c9c;
}
form button {
  background: lightgrey;
  padding: 0.7em;
  width: 100%;
  border: 0;
  margin: 2px;
}
form button:hover {
  background: gold;
}
input {
  padding: 0.7em;
  margin-bottom: 0.5rem;
}
input:focus {
  outline: 3px solid gold;
}
</style>