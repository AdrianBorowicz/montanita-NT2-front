<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Carrito">Carrito</router-link> |
    <router-link to="/Nosotros">Nosotros</router-link> |
    <router-link to="/Contacto">Contacto</router-link> |
    <router-link class="sesion" to='/Login'>Login</router-link> |
    <router-link class="sesion" to='/Register'>Register</router-link>
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
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#sesion{
  position: right;
  
}

</style>

<script>
  
</script>