<template>
  <div class="login">
    <h1>Login</h1>
    <form class="form" @submit.prevent="login">
      <input
        v-model="user.username"
        type="text"
        required
        placeholder="Username"
      />
      <input
        v-model="user.password"
        type="password"
        required
        placeholder="Password"
      />
      <button @click.once="login()" type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>

form {
  display: grid;
  padding: 1em;
  background: #f9f9f9;
  border: 1px solid #c1c1c1;
  margin: 1rem auto 0 auto;
  max-width: 600px;
  padding: .5em;
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
            let user = { username: data.data.username, token: data.data.token };
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