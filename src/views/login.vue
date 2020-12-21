<template>
  <div class="root-login">
    <form @submit.prevent="pressed">
      <div id="login">
        <input class="inputlogin" type="email" v-model="email" placeholder="email">
      </div>
      <div id="password">
        <input class="inputpasswd" type="password" v-model="password" placeholder="Senha">
      </div>
      <button>Login</button>
      <router-link to="/register" class="registerb"> Não tenho um login</router-link>
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
#login, #password{
  background-color: #fff !important;
  border-radius: 7px;
}

.inputlogin, .inputpasswd{
  width: 100%;
}

.registerb{
  text-decoration: none;
  color: white;
  justify-content: flex-start;
  display: flex;
}

</style>