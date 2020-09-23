<template>
  <div class="browse-container">
    <h1>Browse Characters</h1>
    <div v-if="!loading" class="character-container">
      <div v-for="item in allCharacters" :key="item.id">
        <h2>{{item.name}}</h2>
        <img :src="item.image" />
        <p>{{item.status}}</p>
      </div>
    </div>
    <div class="button-container">
      <button @click="decreasePage">Previous Page</button>
      <button @click="increasePage">Next Page</button>
    </div>
  </div>
</template>

<script>
import useCharacters from "../store/all-characters";
import { onMounted } from "vue";

export default {
  name: "Browse",
  props: {
    data: {
      type: Object,
    },
  },
  setup() {
    const {
      allCharacters,
      loading,
      decreasePage,
      increasePage,
    } = useCharacters();

    onMounted(() => {
      console.log("all Characters in browse", allCharacters);
    });

    return {
      allCharacters,
      loading,
      decreasePage,
      increasePage,
    };
  },
};
</script>

<style lang="scss" scoped>
.browse-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 5%;
  scroll-behavior: smooth;

  .character-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .button-container {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>