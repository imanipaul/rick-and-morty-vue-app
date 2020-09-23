<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3 v-if="selectedCharacter">{{selectedCharacter.name}} {{selectedCharacter.species}}</h3>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

import useCharacter from "../store/characters";

export default {
  name: "CharacterProfile",
  setup() {
    const { selectedCharacter } = useCharacter(4);

    return {
      selectedCharacter,
    };
  },
};
</script>