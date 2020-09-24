<template>
  <div class="home">
    <h1>Home</h1>
    <h2 v-if="loading">Loading...</h2>
    <div v-else>
      <Browse />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Browse from "../components/Browse";
// import useCharacter from "../store/character";

export default {
  name: "Home",
  components: { Browse },
  setup() {
    // const { selectedCharacter, loading } = useCharacter(4);

    return {
      // selectedCharacter,
      // loading,
    };
  },
};
</script>
