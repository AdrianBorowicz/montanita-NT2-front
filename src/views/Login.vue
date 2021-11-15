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
      <button @click.once="login()" type="submit">Login</button>
    </form>
    <label v-if="this.$store.state.user != null">{{ resultado }}</label>
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
      user: { username: "", password: "" },
      resultado: "",
    };
  },
  props: {},
  methods: {
    async login() {
      if (this.user.username != "" && this.user.password != "") {
        UserServices.postUser(this.user)
          .then(data => {
            console.log(data)
            let user = { username: this.user.username, token: data.data.token };
            this.$store.dispatch("setUser", user);
            this.resultado=data.data.message;
            this.$router.push('/')
          })
          .catch((err) => {
            //console.log(err.response.data.message)
            this.resultado=err.response.data.message;
            alert(err.response.data.message);
            //this.resultado = err.data;
          });
      } else {
        alert("Datos incompletos.");
      }
      this.user.username = "";
      this.user.password = "";
    },
  },
};
</script>