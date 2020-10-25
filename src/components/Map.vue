<template>
  <div>
    <GmapMap
      class="mt-4"
      v-if="!$vuetify.breakpoint.xs"
      :center="myCoordinates"
      :zoom="zoom"
      style="width:85vh; height:40vh; margin: auto;"
      ref="mapRef"
      @dragend="handleDrag"
    ></GmapMap>
    <GmapMap
      v-if="$vuetify.breakpoint.xsOnly"
      :center="myCoordinates"
      :zoom="zoom"
      style="width:40vh; height:45vh; margin: auto;"
      ref="mapRef"
      @dragend="handleDrag"
    ></GmapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: -31.345582,
        lng: -64.225933,
      },
      zoom: 17,
    };
  },
  mounted() {
    // add the map to a data object
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  methods: {
    handleDrag() {
      // get center and zoom level, store in localstorage
      let center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
      let zoom = this.map.getZoom();
      localStorage.center = JSON.stringify(center);
      localStorage.zoom = zoom;
    },
  },
  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: -31.345582,
          lng: -64.225933,
        };
      }
      return {
        lat: this.map
          .getCenter()
          .lat()
          .toFixed(4),
        lng: this.map
          .getCenter()
          .lng()
          .toFixed(4),
      };
    },
  },
};
</script>
