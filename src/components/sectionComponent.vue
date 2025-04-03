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
  font-size: 60px;
  font-weight: bold;
  color: whitesmoke;
  font-family: "VT323", monospace;
  margin: 20px 0;
}
</style>
