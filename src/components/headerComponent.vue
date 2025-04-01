<template>
  <v-card class="text-card" flat>
    <v-card-text>
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
      <p v-if="aboutMe" class="styled-text" v-html="aboutMe"></p>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  aboutMe: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap");

.text-card {
  padding: 20px;
  text-align: left;
}

.title {
  font-size: clamp(40px, 8vw, 96px);
  font-weight: bold;
  background: linear-gradient(30deg, #ab83fe 0%, #a9fe81 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-weight: 600;
  font-size: clamp(24px, 5vw, 68px);
  background: linear-gradient(30deg, #a9fe81 0%, #c0f0ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.styled-text {
  font-size: clamp(18px, 2.5vw, 28px);
  font-weight: bold;
  color: #a2c3ff;
  font-family: "Just Me Again Down Here", cursive;
  letter-spacing: 2px;
  margin-top: 20px;
}
</style>
