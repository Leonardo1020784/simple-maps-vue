<template>
  <div class="form-container" v-if="activePoint">
    <h2>Edit Point</h2>
    <form @submit.prevent="savePoint">
      <div>
        <label>Name</label>
        <input v-model="form.name" required />
      </div>
      <div>
        <label>Code</label>
        <input v-model="form.code" required />
      </div>
      <div>
        <label>Latitude</label>
        <input type="number" v-model.number="form.coordinates[0]" required />
      </div>
      <div>
        <label>Longitude</label>
        <input type="number" v-model.number="form.coordinates[1]" required />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { Point } from "../store/index";

export default defineComponent({
  name: "FormComponent",
  setup() {
    const store = useStore();
    const activePoint = computed(() => store.state.activePoint);
    const form = ref({
      name: "",
      code: "",
      coordinates: [0, 0],
    });

    watch(
      activePoint,
      () => {
        if (activePoint.value) {
          form.value = { ...activePoint.value };
        }
      },
      { immediate: true }
    );

    const savePoint = () => {
      store.commit(
        "setPoints",
        store.state.points.map((point: Point) =>
          point.id === activePoint.value.id ? form.value : point
        )
      );
    };

    return { form, activePoint, savePoint };
  },
});
</script>

<style scoped>
.form-container {
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
}

form {
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 0.5rem;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
