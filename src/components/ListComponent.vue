<template>
  <div>
    <p>Points</p>
    <q-virtual-scroll
      :items="points"
      :item-size="itemSize"
      class="list-container"
    >
      <template #default="{ item }">
        <ListItem :coordinate="item" @click="selectPoint(item)" />
      </template>
    </q-virtual-scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import ListItem from "./ListItem.vue";
import { QVirtualScroll } from "quasar";
import { Point } from "@/points";

export default defineComponent({
  name: "ListComponent",
  components: {
    ListItem,
    QVirtualScroll,
  },
  setup() {
    const store = useStore();
    const points = ref(store.state.points);

    const itemSize = 50;

    const selectPoint = (point: Point) => {
      store.dispatch("selectPoint", point);
    };

    return {
      points,
      selectPoint,
      itemSize,
    };
  },
});
</script>

<style scoped>
.list-container {
  height: 550px;
  overflow: auto;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.code {
  font-size: 12px;
  color: #888;
  margin-bottom: 2px;
}

.coordinates {
  font-size: 10px;
  color: #555;
}
</style>
