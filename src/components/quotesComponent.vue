<template>
  <v-card class="text-card" flat>
    <v-card-text>
      <p class="styled-text" v-html="quote"></p>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap");

.text-card {
  padding: 20px;
  text-align: center;
}

.styled-text {
  font-size: 22px;
  font-weight: bold;
  color: #a2c3ff;
  font-family: "Just Me Again Down Here", cursive;
  letter-spacing: 2px;
}
</style>
