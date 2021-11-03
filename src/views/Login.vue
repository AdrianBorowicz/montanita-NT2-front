<template>
  <div class="login">
    <h1>Login</h1>
    <div class="container">
      <div class="form">
        <div class="row">
          <label>Ingrese usuario</label>
          <input v-model="user.username" type="text" required placeholder="user"/>
        </div>
        <div class="row">
          <label>Ingrese Contraseña</label>
          <input v-model="user.password" type="password" required placeholder="password"/>
        </div>
      <button @click="login()">Entrar</button>
      </div>
      
    </div>
      {{this.$store.getters.getUser}}
  </div>
</template>

<style scoped>
  .form{
    border: solid black 0.1rem;
    width: 70%;
  }
</style>

<script>


export default {
  name: "Login",
  data(){
    return {
      user: {username:'', password: ''},

      userHc: 'admin',
      passwordhc: 'admin',
    }
  },
  props:{
    
  },
  methods:{
    login(){
      if (this.user.username===this.userHc && this.user.password===this.passwordhc){
        alert('Se ha logueado correctamente');
        this.$store.commit('setUser', this.user)
        this.$router.push({ name: 'Home' })
      }else{
        alert('Usuario o contraseña incorrectos!')
      }
    }
    }
  }
</script>