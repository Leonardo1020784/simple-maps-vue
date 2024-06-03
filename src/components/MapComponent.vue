<template>
  <div id="map-container">
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import { useStore } from "vuex";
import L from "leaflet";
import { Point } from "@/points";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import pointIcon from "./images/point.png";

export default defineComponent({
  name: "MapComponent",
  setup() {
    const store = useStore();
    let map: L.Map;
    let markers: L.MarkerClusterGroup;

    onMounted(() => {
      map = L.map("map").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);

      markers = L.markerClusterGroup();
      map.addLayer(markers);

      // Define the custom icon
      const customIcon = L.icon({
        iconUrl: pointIcon,
        iconSize: [32, 32], // size of the icon
        iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
      });

      const points = store.state.points;
      points.forEach((point: Point) => {
        const marker = L.marker(point.coordinates, { icon: customIcon }).on(
          "click",
          () => {
            store.dispatch("selectPoint", point);
          }
        );
        markers.addLayer(marker);
      });
    });

    watch(
      () => store.state.activePoint,
      (activePoint) => {
        if (activePoint) {
          map.setView(activePoint.coordinates, 13);
        }
      }
    );
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
