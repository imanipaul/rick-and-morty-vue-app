<template>
  Character Info
  <p>
    {{character.name}}
    <br />
    {{character.species}}
  </p>
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