<template>
    <div class="map">
        <GMapMap
            :center="center"
            :zoom="13"
            map-type-id="terrain"
        >
        <!-- <GMapMarker
          :key="index"
          v-for="(station, index) in amsStations"
          :position="{ lat: station.lat, lng: station.lon}"
          @mouseover="openMarker(station.uid)"
        />  -->
            <GMapCircle
                :key="index"
                v-for="(station, index) in amsStations"
                :radius="800"
                :clickable=true
                :options=" {
                  strokeOpacity: 0,
                  fillColor: color[index],
                  fillOpacity: 0.35,
                }"
                :center="{ lat: station.lat, lng: station.lon}"
                @click="center= { lat: station.lat, lng: station.lon}, showByIndex = index"
                @mouseover="showByIndex = index"
            >
          
            
              <GMapInfoWindow
                  @mouseleave="openMarker(null)"
                  :opened="showByIndex === amsStations[index]"
                >
                <div><h3>{{ amsStations[index].name }}</h3>
                <h5>{{ amsStations[index].aqi }}</h5>
                <p>{{ amsStations[index].lat }}</p>
                <p>{{ amsStations[index].long }}</p></div>
              </GMapInfoWindow>
            </GMapCircle>
        </GMapMap> 
        <Switch class="switch" v-on:change="triggerToggleEvent"/>
    </div>
    
</template>
 
<script>
import Switch from './Switch.vue'

export default {

  name: "Map",
  components: {
    Switch,
  },
  data() {
    return {
      center: { 
        lat: 52.37427,
        lng: 4.86096
      },
      link: "https://api.waqi.info/map/bounds/",
      bounds: "52.315195,4.786606,52.425873,5.057144",
      token: "edd5ed0e29943baa4f713c19d773e17f7b9d2ad6",
      color: [],
      amsStations: [],
      openedMarkerID: null,
      toggleActive: false,
      showByIndex: null
    }
  },
  props: ['this.isActive'],
  methods: {
    triggerToggleEvent(value) {
      this.toggleActive = value;
      if (this.toggleActive) {
        window.setInterval(() => {
          this.apiCall()
        }, 10000)
      } else return
    },
    openMarker(id) {
       this.openedMarkerID = id
    },
   async apiCall(){
        this.color = []
        const response = await fetch(this.link + "?latlng=" + this.bounds + "&token=" + this.token)
        const data = await response.json()
        this.amsStations = data.data

        this.amsStations.forEach(element => {
            if (element.aqi < 15 && element.aqi > 0) {
                this.color.push("#17fa05")
            } else if (element.aqi < 30) {
                this.color.push("#39bd06")
            } else if (element.aqi < 55) {
                this.color.push("#ccc912")
            } else if (element.aqi < 110) {
                this.color.push("#fc536d")
            } else if(element.aqi > 110) {
                this.color.push("#551a8b")
            }
        });
    },
  },
  created(){
      this.apiCall()
  },
};
</script>

<style lang="scss" scoped>
* {
  height: 100vh;
  width: 100vw;
  margin: 0px;
}
.map {
  position: relative;
}
.switch {
  position: absolute;
  top: 2px;
  left: 50%;
  z-index: 99;
  width: 80px;
  height: 40px;
}

</style>