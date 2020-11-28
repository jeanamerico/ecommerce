<template>
  <div class="root-all">
    <div id="nav-row">
      <navrow/>
    </div>
    <div id="content-page">
      <contents/>
    </div>
    <div id="root-footer">
      <rodape/>
    </div>
  </div>
</template>

<script>

import navrow from './components/navrow'
import contents from './components/contents'
import rodape from './components/rodape'

export default {
  name: "app",
  components: { 
    navrow,
    contents,
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