<template>
  <div class="form-container" v-if="activePoint">
    <h6>Edit Point</h6>
    <form @submit.prevent="savePoint">
      <div>
        <label>Name: {{ form.name }}</label>
      </div>
      <div>
        <label>Code: {{ form.code }}</label>
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
import { Point } from "../points";

export default defineComponent({
  name: "FormComponent",
  setup() {
    const store = useStore();
    const activePoint = computed(() => store.state.activePoint);
    const form = ref({
      name: "",
      code: "",
      coordinates: [0, 0] as [number, number], // Ensure this is a tuple
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
      const updatedPoint: Point = { ...form.value, id: activePoint.value.id };
      store.commit(
        "setPoints",
        store.state.points.map((point: Point) =>
          point.id === updatedPoint.id ? updatedPoint : point
        )
      );
    };

    return {
      form,
      activePoint,
      savePoint,
    };
  },
});
</script>

<style scoped>
.form-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  margin-top: 0;
}

.form-container div {
  margin-bottom: 10px;
}

.form-container label {
  display: block;
  margin-bottom: 5px;
}

.form-container p {
  margin: 0;
  padding: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-container input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-container button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-container button:hover {
  background-color: #0056b3;
}
</style>
