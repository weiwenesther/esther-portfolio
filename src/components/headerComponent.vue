<template>
  <v-card class="text-card" flat>
    <v-card-text>
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
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
});
</script>

<style scoped>
.text-card {
  padding: 20px;
  text-align: left;
}

.title {
  font-size: 96px;
  font-weight: bold;
  background: linear-gradient(30deg, #ab83fe 0%, #a9fe81 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-weight: 600;
  font-size: 68px !important;
  background: linear-gradient(30deg, #a9fe81 0%, #c0f0ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
}
</style>
