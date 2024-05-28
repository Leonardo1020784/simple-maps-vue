<template>
  <div>
    <h2>Points List</h2>
    <RecycleScroller
      :items="coordinates"
      :item-size="10"
      class="list-container"
      key-field="id"
    >
      <template #default="{ item }">
        <ListItem :coordinate="item" />
      </template>
    </RecycleScroller>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
import coordinatesData from "./coordinates.json";
import { RecycleScroller } from "vue3-virtual-scroller";

export default {
  name: "ListComponent",
  components: {
    ListItem,
    RecycleScroller,
  },
  data() {
    return {
      coordinates: [],
    };
  },
  created() {
    this.loadCoordinates();
  },
  methods: {
    loadCoordinates() {
      // Add unique IDs to each coordinate
      this.coordinates = coordinatesData.map((coordinate, index) => ({
        ...coordinate,
        id: index + 1,
      }));
    },
  },
};
</script>

<style scoped>
.list-container {
  height: 550px;
  overflow: auto;
}
</style>
