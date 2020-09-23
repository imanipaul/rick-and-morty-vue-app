<template>
  <h3 v-if="selectedCharacter">{{selectedCharacter.name}}</h3>
</template>

<script>
// import { watch } from "vue";
// import useTodos from "../store/todos";
import useCharacter from "../store/character";

export default {
  setup() {
    // const { selectedTodo } = useTodos();
    const { selectedCharacter } = useCharacter(4);

    // watch(selectedTodo, (selectedTodo) => {
    //   console.log("selected todo from STD comp is", selectedTodo);
    // });

    return {
      selectedCharacter,
    };
  },
};
</script>

<style>
</style>