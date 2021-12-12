<template>
  <div class="contacto">
    <h1>Pagina de contacto</h1>
    <div>
      <form submit.prevent='Contacto'>
        <input v-model="datos.emailArea" type="email" placeholder="Email@email.com" required/>
        <textarea v-model="datos.textArea" id='textArea' placeholder="Ingrese su comentario.">Dejenos su comentario o inquietud.</textarea>
        <button @click="enviarMensaje(datos)">Enviar</button>
      </form>
    </div>
    
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
form textarea{
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
export default {
  name: "Contacto",
  components: {},
  data(){
    return{
      datos:{
        textArea:'',
        emailArea:'',
      }
      
    }
  },
  methods:{
    enviarMensaje(datos){
      alert('Todavia no esta implementado. Lamentamos los inconvenientes!');
      console.log(datos);
      this.textArea='',
      this.emailArea=''
    },
  }
};
</script>