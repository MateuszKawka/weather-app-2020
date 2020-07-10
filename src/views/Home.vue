<template>
  <div class="home">
     <v-row
          align="center"
          justify="center"
        >
        <v-col cols="10">
<SearchLocation msg="Welcome to Your Vue.js App"/>
<Bookmarks />
        </v-col>
     </v-row>
    
  </div>
</template>

<script>
// @ is an alias to /src
import SearchLocation from '@/components/SearchLocation.vue'
import Bookmarks from "@/components/Bookmarks.vue"
export default {
  name: 'Home',
  components: {
    SearchLocation,
    Bookmarks
  },
  mounted() {
    this.$store.dispatch('getWeatherData')
  }
}
</script>
