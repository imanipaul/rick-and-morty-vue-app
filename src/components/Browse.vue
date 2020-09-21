<template>
  <div>
    <h1>Browse</h1>
    <div v-if="!loading">
      <div v-for="item in data" :key="item.id">{{item.name}}</div>
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
  },
};
</script>

<style>
</style>