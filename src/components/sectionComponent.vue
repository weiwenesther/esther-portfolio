<template>
  <v-card class="text-card" flat>
    <v-card-text>
      <h2 class="section">{{ section }}</h2>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  section: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.text-card {
  padding: 0;
  text-align: center;
  font-family: "VT323", monospace;
}

/* Override Vuetify's default padding */
:deep(.v-card-text) {
  padding: 0 !important;
}

.section {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: bold;
  color: rgb(229, 235, 248);
  font-family: "VT323", monospace;
  margin: 20px 0;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.4),
    0 0 10px rgba(255, 255, 255, 0.3), 
    0 0 15px rgba(129, 179, 254, 0.3),
    0 0 20px rgba(224, 166, 244, 0.2);
  animation: glow 2s ease-in-out infinite alternate;
}
</style>
