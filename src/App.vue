<template>
  <div id="app">
    <header>
      <h1>Map Points</h1>
      <nav>
        <router-link to="/">Map</router-link>
        <router-link to="/form">Form</router-link>
      </nav>
    </header>
    <div class="container">
      <aside>
        <ListComponent />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListComponent from "./components/ListComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    ListComponent,
  },
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.5rem; /* Reduce padding to make the header narrow */
  background-color: white;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
}

header h1 {
  margin: 0;
  font-size: 18px;
}

nav {
  display: flex;
}

nav a {
  margin: 0 0.5rem;
  color: #333;
  text-decoration: none;
}

.container {
  display: flex;
  flex: 1;
}

aside {
  width: 300px;
  overflow-y: auto;
  background-color: white;
  border-right: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
}

main {
  flex: 1;
  padding: 0.5rem;
  overflow-y: auto;
}
</style>
