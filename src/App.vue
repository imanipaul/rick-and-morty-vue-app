<template>
  <h1>Rick and Morty Look Up</h1>
  <Browse :data="state.data" :loading="state.loading" />
  <button @click="fetchData(2)">Next Page</button>
</template>

<script>
import Browse from "./components/Browse.vue";
import axios from "axios";
import { ref, onMounted, reactive } from "vue";

export default {
  name: "App",
  components: {
    Browse,
  },
  setup() {
    // const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const state = reactive({
      data: "",
    });

    // function testPrint() {
    //   console.log("testinggg....");
    // }

    async function fetchData(page) {
      loading.value = true;

      await axios
        .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((response) => {
          console.log("response is", response);
          state.data = response.data.results;
          loading.value = false;
        });
    }

    onMounted(() => {
      fetchData(1);
    });

    return {
      state,
      loading,
      error,
      fetchData,
    };
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
