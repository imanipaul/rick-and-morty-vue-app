<template>
  <h1>Rick and Morty Look Up</h1>
  <Browse :decreasePage="decreasePage" :increasePage="increasePage" />
  <router-view />
</template>

<script>
import Browse from "./components/Browse.vue";
import { ref, onMounted, watch } from "vue";
import useCharacter from "./store/character";
import useCharacters from "./store/all-characters";

export default {
  name: "App",
  components: {
    Browse,
  },
  setup() {
    // const loading = ref(true);
    const error = ref(null);
    const page = ref(1);
    const { fetchCharacter } = useCharacter(4);
    const { allCharacters, fetchCharacters, loading, info } = useCharacters(4);

    watch(page, (page) => {
      fetchCharacters(page);
      console.log("page is", page.value);
    });

    function increasePage() {
      if (page.value === info.pages) {
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

    onMounted(() => {
      fetchCharacters(page);
      fetchCharacter();
    });

    return {
      loading,
      error,
      increasePage,
      decreasePage,
      allCharacters,
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
