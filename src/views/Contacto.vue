<template>
  <div class="contacto">
    <h1>Pagina de contacto</h1>
    <div>
      <form submit.prevent='Contacto'>
        <input v-model="emailArea" type="email" placeholder="Email@email.com" required/>
        <textarea v-model="textArea" id='textArea' placeholder="Ingrese su comentario.">Dejenos su comentario o inquietud.</textarea>
        <button @click="enviarMensaje">Enviar</button>
      </form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Contacto",
  components: {},
  data(){
    return{
      textArea:'',
      emailArea:'',
    }
  },
  methods:{
    enviarMensaje(){
      this.textArea='',
      this.emailArea=''
    },
  }
};
</script>