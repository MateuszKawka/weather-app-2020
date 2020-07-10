<template>
    <div>
        <p>Bookmarks</p>

        <p class="info-no-bookmarks">You don't have any bookmarked location.To save it for quicker access, click star close to location name</p>
      <v-icon>{{ svgPath }}</v-icon>
    </div>
</template>

<script>
 import { mdiThumbUp } from '@mdi/js';


  export default {
    data: () => ({
      svgPath: mdiThumbUp
    }),
  }
</script>