<template>
  <h1>Rick and Morty Look Up</h1>
  <Browse />
</template>

<script>
import Browse from "./components/Browse.vue";

export default {
  name: "App",
  components: {
    Browse,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
