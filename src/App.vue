<template>
  <div class="root-all">
    <div id="nav-root">
      <navrow/>
    </div>
    <div id="banner-root">
      <banner/>
    </div>
    <div id="products-root">
      <products/>
    </div>
    <div id="root-footer">
      <rodape/>
    </div>
  </div>
</template>

<script>

import navrow from './components/navrow'
import banner from './components/banner'
import products from './components/products'
import rodape from './components/rodape'

export default {
  name: "app",
  components: { 
    navrow,
    banner,
    products,
    rodape
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

html,body{
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
</style>