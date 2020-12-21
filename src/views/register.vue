<template>
  <div class="root-register">
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      <div id="login">
        <input class="inputlogin" type="email" v-model="email" placeholder="email">
      </div>
      <div id="password">
        <input class="inputpasswd" type="password" v-model="password" placeholder="Senha">
      </div>
      <button type="submit">Registrar</button>
      <router-link to="/login" class="registerb"> Retornar para login</router-link>
    </form>
  </div>
</template>

<script>
import firebase from '@firebase/app';
require('firebase/auth');

export default {
  methods: {
    pressed(){
      try{
        const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
        console.log(user)
        
        this.$router.replace({name: "secret"});
      }catch(err){
        console.log(err)
      }
      
    }
  },
  data(){
    return {
      email: "",
      password: '',
      error: ''
    }
  }
}
</script>

<style>

</style>