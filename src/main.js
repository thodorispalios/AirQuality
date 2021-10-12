import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App).use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBcRHdM6I96SvoMHfj_mSX1eK8TF_WuNxk",
      libraries: "places"
    }
  }).mount('#app')
  
