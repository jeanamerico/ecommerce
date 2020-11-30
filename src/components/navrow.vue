<template>
  <div class="root-header">
    <v-bottom-navigation
    :value="value"
    color="teal"
    grow>

      <v-btn>
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
    data: () => ({ value: 1 }),
  }

</script>

<style>
.v-item-group.v-bottom-navigation .v-btn.v-btn--active{
  color:#009688!important;
}
.v-btn:not(.v-btn--round).v-size--default{
  height: 100% !important;
      min-width: 64px;
    padding: 0 16px;
}
</style>