<template>
  <div class="root-all">
    <div id="nav-row">
      <navrow/>
    </div>
    <div id="content-page">
      <contents/>
    </div>
  </div>
</template>

<script>
import navrow from './components/navrow.vue'
import contents from './components/contents.vue'
export default {
  components: { 
    navrow,
    contents
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