<template>
  <div class="root-content">
    <div class="banners">
      <v-carousel cycle hide-delimiters
      :show-arrows ="false">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
          flex= none>

          <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.title }}</v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="produtos"></div>
  </div>
</template>

<script>
  export default {
    name: "contents",
    data () {
      return {
        items: [
          {
            src: require('../assets/img/Banners/backgroud1.jpg'),
            title: "Os melhores produtos"
          },
           {
            src: require('../assets/img/Banners/backgroud2.jpg'),
            title: "Até 80% de desconto na Black friday"
          },
           {
            src: require('../assets/img/Banners/backgroud3.jpg'),
            title: "As melhores tecnologias para um atendimento melhor"
          },
        ]
      }
    },
  }
</script>

<style lang="scss">
.banners {
  position: relative;

  .v-window {
    @media only screen and (max-width: 1320px) {
      height: 220px !important;
    }
  }

  .v-image__image {
    &:before {
      content: '';
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }

  .v-responsive__content{
    flex:none !important;
  }

  .title {
    color: white;
    position: relative;
    z-index: 2;
    font: 300 50px/1.6 primary-font !important;
    align-items: center!important;
    justify-content: center!important;
  }
}
</style>