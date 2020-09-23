<template>
  <div class="home">
    <h1>Home</h1>
    <h2 v-if="loading">Loading...</h2>
    <div v-else>
      <SelectedTodo />
      <router-link to="/character/1">
        <p>{{selectedCharacter.name}} {{selectedCharacter.status}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { onMounted } from "vue";
import useCharacter from "../store/character";
import SelectedTodo from "../components/SelectedTodo.vue";

export default {
  name: "Home",
  components: { SelectedTodo },
  setup() {
    const { selectedCharacter, loading } = useCharacter(4);

    return {
      selectedCharacter,
      loading,
    };
  },
};
</script>
