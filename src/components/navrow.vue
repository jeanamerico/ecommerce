<template>
  <div class="root-header">
    <v-bottom-navigation v-model="value" :background-color="color" dark shift>
      <v-img class="img-logo-home" src="../assets/logo-home.png" width="10px">
      </v-img>
      <v-col class="inputpesq"
        cols="12"
        sm="6"
        md="3">
        
        <v-text-field
          dense
          filled
          rounded
          label="O que você está procurando?"
        ></v-text-field>
      </v-col>

      <v-btn>
        <span>Login</span>
        <v-icon>mdi-account-supervisor-circle-outline</v-icon>
      </v-btn>

      <v-btn>
        <v-badge content="6">Carrinho</v-badge>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
    

    <div class="row-service">
      <template>
        <v-tabs align-with-title>
          <v-tab>Mulheres</v-tab>
          <v-tab>Homens</v-tab>
          <v-tab>Infantil</v-tab>
          <v-tab>Esportes</v-tab>
          <v-tab>Todas as categorias</v-tab>
        </v-tabs>
      </template>
    </div>
  </div>
</template>

<script>
export default {
}

</script>

<style>
.v-image.v-responsive.img-logo-home.theme--dark .v-image__image.v-image__image--cover{
  width: 110px !important;
  margin: 0 45px !important;
}

.inputpesq{
  margin: 0 15% 0 0;
}
.v-bottom-navigation.v-item-group.theme--dark.v-bottom-navigation--shift{
  height: 75px !important;
}
.v-text-field {
  padding-top: 0 !important;
}
.v-item-group.v-bottom-navigation .v-btn.v-btn--active{
  color:#ffffff!important;
}
.v-btn:not(.v-btn--round).v-size--default{
  height: 100% !important;
  min-width: 64px;
  padding: 0 40px !important;
}

.v-bottom-navigation{
  background-color:#009688!important;
  border-color:#009688!important
}
</style>