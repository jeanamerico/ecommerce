<template>
  <div class="root-content">
    <div class="banners">
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div class="produtos"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/img/Banners/backgroud1.jpg'),
          },
        ]
      }
    },
  }
</script>

<style>
.banner img {
  opacity: 0;
  width: 100%;
  height: 600px;
  position: absolute;
  object-fit: cover;
}

.banner .select {
  opacity: 1;
}


</style>