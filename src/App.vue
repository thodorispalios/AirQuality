<template>
  <div class="map">
    <Map />
  </div>
</template>

<script>
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Map,
  },
}
</script>

<style lang="scss" scoped>
.map {
  height:100vh;
  width:100vw;
  margin: -8px;
}
</style>
