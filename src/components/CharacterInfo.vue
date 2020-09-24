<template>
  Character Info
  <p>Name: {{character.name}}</p>
  <img :src="character.image" alt="character headshot" />
  <p>Status: {{character.status}}</p>
  <p>Species: {{character.species}}</p>
  <p v-if="character.type">Type: {{character.type}}</p>
  <p>Gender: {{character.gender}}</p>
  <p>Origin: {{character.origin.name}}</p>
  <p>Location: {{character.location.name}}</p>
</template>

<script>
export default {
  name: "CharacterInfo",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>