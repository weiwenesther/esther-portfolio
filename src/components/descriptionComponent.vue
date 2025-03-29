<template>
  <v-card class="text-card" flat>
    <v-card-text>
      <p class="paragraph">
        {{ paragraph }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  paragraph: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.text-card {
  padding: 18px;
  text-align: left;
}

.paragraph {
  font-size: 18px;
  color: white;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 20px;
}

.bold {
  font-weight: 600;
}
</style>
