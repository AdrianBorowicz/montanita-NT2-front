<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Carrito">Carrito</router-link>
    <router-link to="/Nosotros">Nosotros</router-link>
    <router-link to="/Contacto">Contacto</router-link>
    
    <template v-if="!this.$store.getters.isLogin">
      <router-link class="sesion" to="/Login">Login</router-link>
      <router-link class="sesion" to="/Register">Register</router-link>
    </template>
    
    <button id="logout" v-else @click="this.$store.commit('logout')"
    >
      Logout</button>
    <router-link v-if="!this.$store.getters.isLogin" to="/AgregarProductos"
      >Agregar Productos
    </router-link>
  </div>
  <router-view />
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
</script>