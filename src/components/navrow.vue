<template>
  <div class="root-header">
    <v-bottom-navigation v-model="value" :background-color="color" dark shift>
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
  </div>
</template>

<script>
export default {
}

</script>

<style>
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