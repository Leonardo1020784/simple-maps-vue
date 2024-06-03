<template>
  <div
    class="card"
    :style="{ backgroundColor: isHighlighted ? '#f6c3f8' : 'white' }"
  >
    <span class="title">{{ coordinate.name }}</span>
    <span class="code"> - Code: {{ coordinate.code }}</span>
    <p class="coordinates">
      Latitude: {{ coordinate.coordinates[0] }} - Longitude:
      {{ coordinate.coordinates[1] }}
    </p>
    <input type="checkbox" @click="highlightMarker" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ListItem",
  props: {
    coordinate: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isHighlighted = ref(false);

    const highlightMarker = () => {
      isHighlighted.value = !isHighlighted.value;
      emit("highlight", isHighlighted.value);
    };

    return {
      isHighlighted,
      highlightMarker,
    };
  },
});
</script>

<style scoped>
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
