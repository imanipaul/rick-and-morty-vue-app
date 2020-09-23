<template>
  <h1>Rick and Morty Look Up</h1>
  <Browse
    :data="state.data"
    :loading="state.loading"
    :decreasePage="decreasePage"
    :increasePage="increasePage"
  />
  <router-view />
</template>

<script>
import Browse from "./components/Browse.vue";
import axios from "axios";
import { ref, onMounted, reactive, watch } from "vue";
import useCharacter from "./store/characters";

export default {
  name: "App",
  components: {
    Browse,
  },
  setup() {
    const loading = ref(true);
    const error = ref(null);
    const page = ref(1);
    const {
      selectedCharacter,
      fetchCharacter,
      loading: loadingChar,
    } = useCharacter(4);

    const state = reactive({
      data: "",
      maxPages: 3,
    });

    watch(page, (page) => {
      fetchAllCharacters(page);
    });

    function increasePage() {
      if (page.value === state.maxPages) {
        alert("No more pages!");
      } else {
        page.value++;
      }
    }

    function decreasePage() {
      if (page.value === 1) {
        alert("This is the first page!");
      } else {
        page.value--;
      }
    }

    async function fetchAllCharacters(page) {
      loading.value = true;

      await axios
        .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((response) => {
          console.log("response is", response);
          state.data = response.data.results;
          state.maxPages = response.data.info.pages;
          loading.value = false;
        });
    }

    onMounted(() => {
      fetchAllCharacters(page);
      fetchCharacter();
    });

    return {
      state,
      loading,
      error,
      fetchAllCharacters,
      increasePage,
      decreasePage,
      selectedCharacter,
      loadingChar,
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
