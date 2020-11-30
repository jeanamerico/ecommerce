<template>
  <div class="root-header">
    <v-bottom-navigation v-model="value" :background-color="color" dark shift>
      <v-btn>
        <span>Login</span>
        <v-icon>mdi-account-supervisor-circle-outline</v-icon>
      </v-btn>

      <v-btn>
        <span>Carrinho</span>
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