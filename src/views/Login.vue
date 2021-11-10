<template>
  <div class="login">
    <h1>Login</h1>
    <form class="form" @submit.prevent="login">
      <p>Usuario</p>
      <input
        v-model="user.username"
        type="text"
        required
        placeholder="Username"
      />
      <p>Contraseña</p>
      <input
        v-model="user.password"
        type="password"
        required
        placeholder="Password"
      />
      <button @click="login()" type="submit">Login</button>
    </form>
    {{ this.$store.user }}
  </div>
</template>

<style scoped>
.form {
  border: solid black 0.1rem;
  margin: 0px 150px 0px 150px;
}
</style>

<script>
import UserServices from "../services/UserServices.js";

export default {
  name: "Login",
  data() {
    return {
      user:{ username: "", password: "" },
    };
  },
  props: {},
  methods: {
      async login() {
        //console.log(this.user)
        
        UserServices.postUsers(this.user)
        .then(data=>{
          console.log(data)
          if(data==!null){
            this.$store.dispatch('setUser', data)
            }
        })
        .catch(err=>{
          console.log(err);
          alert('Credenciales incorrectas. Vuelva a intentarlo!')
        })


        /* if(await UserServices.postUsers(this.user)!=null){
          this.$store.dispatch('setUser', this.user).then(console.log(this.$store.user))
        } */
    },
  },
};
</script>