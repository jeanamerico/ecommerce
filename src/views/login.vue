<template>
  <div class="root-login">
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="email" v-model="email" placeholder="email">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="Senha">
      </div>
      <button>entrar</button>
    </form>
    <div v-if="error" class="error">{{error.message}}</div>
  
  </div>
</template>

<script>
import firebase from '@firebase/app';
require('firebase/auth');

export default {
  data(){
    return{
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "secret" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  },
}
</script>

<style>

</style>