// src/leaflet.markercluster.d.ts
import * as L from "leaflet";

declare module "leaflet" {
  function markerClusterGroup(
    options?: L.MarkerClusterGroupOptions
  ): L.MarkerClusterGroup;

  interface MarkerClusterGroup extends L.FeatureGroup {
    addLayer(layer: L.Layer): this;
    clearLayers(): this;
    removeLayer(layer: L.Layer): this;
    getBounds(): L.LatLngBounds;
  }

  interface MarkerClusterGroupOptions extends L.LayerOptions {
    maxClusterRadius?: number | ((zoom: number) => number);
    iconCreateFunction?: (cluster: L.MarkerCluster) => L.Icon;
    clusterPane?: string;
  }

  interface MarkerCluster extends L.Marker {
    getAllChildMarkers(): L.Marker[];
    getChildCount(): number;
    getClusterBounds(): L.LatLngBounds;
  }
}
