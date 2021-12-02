<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Carrito">Carrito ({{this.$store.getters.totalCantidad}})</router-link>
    <router-link to="/Nosotros">Nosotros</router-link>
    <router-link to="/Contacto">Contacto</router-link>
    
    <div v-if="this.logState">
      <router-link class="sesion" to="/Login">Login</router-link>
    </div>
    <div v-else>
      <button id="logout" @click="this.logout">Logout</button>
      <router-link to="/AgregarProductos">Agregar Productos</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#sesion {
  position: right;
}

#logout {
  margin-right: 10px;
}
</style>

<script>
export default{
  name: 'Carrito',
  methods: {
    logout(){
      this.$store.commit('LOGOUT');
    }
  },
  computed:{
    logState(){
      return (!this.$store.state.user);
    }
  }
    
  
}
</script>