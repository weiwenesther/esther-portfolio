<template>
  <v-card class="text-card" flat>
    <v-card-text>
      <p v-for="(item, index) in paragraph" :key="index" class="paragraph">
        {{ item }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  paragraph: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.paragraph {
  font-size: 20px;
  color: whitesmoke;
  font-weight: 400;
  line-height: 1;
  /* margin-bottom: 10px; */
}
</style>
