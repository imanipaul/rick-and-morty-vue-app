<template>
  <div class="about">
    <h1>Character Profile</h1>
    <!-- <h3 v-if="!loading">{{selectedCharacter.name}} {{selectedCharacter.species}}</h3> -->
    <div v-if="loading">Loading Character....</div>
    <div v-else>
      <CharacterInfo :character="selectedCharacter" :loading="loading" />
    </div>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
import { onMounted } from "vue";
// @ is an alias to /src
import { useRoute } from "vue-router";
import useCharacter from "../store/character";
import CharacterInfo from "../components/CharacterInfo";

export default {
  name: "CharacterProfile",
  setup() {
    const route = useRoute();
    const { selectedCharacter, loading, fetchCharacter } = useCharacter(
      route.params.characterId
    );

    onMounted(() => fetchCharacter());

    return {
      selectedCharacter,
      loading,
      CharacterInfo,
    };
  },
};
</script>