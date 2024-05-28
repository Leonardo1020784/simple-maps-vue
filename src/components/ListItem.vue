<template>
  <div class="card">
    <span class="title">{{ coordinate.name }}</span>
    <span class="code"> - Code: {{ coordinate.code }}</span>
    <p class="coordinates">
      Latitude: {{ coordinate.latitude }} - Longitude:
      {{ coordinate.longitude }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    coordinate: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 8px;
  padding: 8px; /* Reduced padding */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Slightly smaller shadow */
  margin-bottom: 5px; /* Reduced margin between cards */
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 14px; /* Smaller font size */
  font-weight: 600;
  margin-bottom: 4px; /* Reduced margin */
}

.code {
  font-size: 12px; /* Smaller font size */
  color: #888;
  margin-bottom: 2px; /* Reduced margin */
}

.coordinates {
  font-size: 10px; /* Smaller font size */
  color: #555;
}
</style>
