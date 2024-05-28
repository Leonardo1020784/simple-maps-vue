<template>
  <div id="map-container">
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Ensure the CSS is loaded

export default defineComponent({
  name: "MapComponent",
  setup() {
    onMounted(() => {
      const map = L.map("map").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);
    });
  },
});
</script>

<style scoped>
#map-container {
  width: 100%;
  height: 100%;
}

#map {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
</style>
