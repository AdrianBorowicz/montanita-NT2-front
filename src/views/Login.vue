<template>
  <div class="login">
    <h1>Login</h1>
    <form class="form" @submit.prevent="login">
      <p>Usuario</p>
      <input v-model="user.username" type="text" required placeholder="Username"/>
      <p>Contraseña</p>
      <input v-model="user.password" type="password" required placeholder="Password"/>
      <button @click="login()" type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
  .form{
    border: solid black 0.1rem;
    margin: 0px 150px 0px 150px;
  }
</style>

<script>


export default {
  name: "Login",
  data(){
    return {
      user: {username:'', password: ''},
      //userHc: 'admin',
      //passwordhc: 'admin',
    }
  },
  props:{
    
  },
  methods:{
    async login(){
        if (await this.$store.dispatch('login', this.user)){
          alert('Bienvenido, '+this.user.username+'!!');
          this.$router.push({ name: 'Home' });
        }else{
          alert('Error. Ingrese bien sus datos!');
          this.user.username='';
          this.user.password='';
        }
        
      }
    }
  }
</script>