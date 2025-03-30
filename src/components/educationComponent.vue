<template>
  <div class="education-container">
    <div class="card">
      <v-card flat>
        <v-card-text>
          <h1 class="title">{{ school }}</h1>
          <h2 class="subtitle">{{ subject }}</h2>
          <p class="subtitle">{{ year }}</p>
        </v-card-text>
        <descriptionComponent :description="description" />
      </v-card>
    </div>
    <pictureStackComponent :images="images" />
  </div>
</template>

<script setup>
import descriptionComponent from "./descriptionComponent.vue";
import pictureStackComponent from "./pictureStackComponent.vue";

defineProps({
  school: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.education-container {
  display: flex;
  align-items: center;
  gap: 40px; /* Space between card and pictures */
}

.card {
  width: 300px;
  height: 200px;
}

.title,
.subtitle {
  background: linear-gradient(90deg, #febd81, #bff4a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title {
  font-size: 35px;
  font-weight: bold;
}

.subtitle {
  font-size: 20px;
}
</style>
