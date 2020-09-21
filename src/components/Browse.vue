<template>
  <div>
    <h1>Browse</h1>
    <div v-if="!loading">
      <div v-for="item in data" :key="item.id">{{item.name}}</div>
      <button @click="decreasePage">Previous Page</button>
      <button @click="increasePage">Next Page</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Browse",
  props: {
    data: {
      type: Object,
    },
    loading: {
      type: Boolean,
    },
    decreasePage: {
      type: Function,
      required: true,
    },
    increasePage: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style>
</style>