<template>
  <h1>Rick and Morty Look Up</h1>
  <router-view />
</template>

<script>
import { onMounted, watch } from "vue";
import useCharacters from "./store/all-characters";

export default {
  name: "App",
  setup() {
    // const page = ref(1);
    const {
      allCharacters,
      fetchCharacters,
      loading,
      // info,
      currentPage,
    } = useCharacters(4);

    watch(currentPage, (currentPage) => {
      fetchCharacters(currentPage);
      console.log("page is", currentPage);
    });

    // function increasePage() {
    //   if (currentPage.value === info.pages) {
    //     alert("No more pages!");
    //   } else {
    //     currentPage.value++;
    //   }
    // }

    // function decreasePage() {
    //   if (page.value === 1) {
    //     alert("This is the first page!");
    //   } else {
    //     page.value--;
    //   }
    // }

    onMounted(() => {
      fetchCharacters(currentPage);
    });

    return {
      loading,
      // increasePage,
      // decreasePage,
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
