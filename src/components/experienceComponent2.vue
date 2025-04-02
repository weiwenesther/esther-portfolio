<template>
  <v-btn @click="isVisible = !isVisible"> This is a button </v-btn>

  <v-expand-transition>
    <v-container
      v-if="isVisible"
      :class="{
        'active-content-container': isVisible,
        'inactive-content-container': !isVisible,
      }"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.</v-container
    >
  </v-expand-transition>
</template>

<script setup>
import { ref } from "vue";

const isVisible = ref(false);
</script>

<style scoped>
.active-content-container {
  display: block;
}

.inactive-content-container {
  display: none;
}
</style>
