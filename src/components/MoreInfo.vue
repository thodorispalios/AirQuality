<template>
  <div class="container">
      <h3>This is a heading</h3>
      <p>this is a paragraph</p>
  </div>
</template>

<script>
export default {
    name: "MoreInfo",
    data(){
        return {
            sensorInfo: []
        }
    },
    async created(){
        const response = await fetch("https://api.waqi.info/map/bounds/?latlng=52.315195,4.786606,52.425873,5.057144&token=edd5ed0e29943baa4f713c19d773e17f7b9d2ad6")
        const data = await response.json()
        this.sensorInfo = data.data
    }
}
</script>

<style lang="scss" scoped>


</style>