<template>
  <div class="login">
    <h1>Login</h1>
    <div class="container">
      <div class="row">
        <label>Ingrese usuario/e-mail</label>
        <input type="text" required placeholder="username or email"/>
      </div>
      <label>Ingrese Contraseña</label>
      <input type="text" required placeholder="password"/>

      <button>Entrar</button>
    </div>
  </div>
</template>

<script>


export default {
  name: "Login",
  data(){
    return {}
  }
};
</script>