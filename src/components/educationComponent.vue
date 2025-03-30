<template>
  <div class="education-container">
    <v-card flat class="info-section">
      <v-card-text>
        <h1 class="title">{{ school }}</h1>
        <h2 class="subtitle">{{ subject }}</h2>
        <p class="subtitle">{{ year }}</p>
      </v-card-text>
    </v-card>

    <div class="description-section">
      <descriptionComponent :description="description" />
    </div>

    <div class="picture-section">
      <pictureStackComponent :images="images" />
    </div>
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
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  height: 400px;
}

.info-section {
  flex: 1;
  min-width: 250px;
  height: 100%;
}

.description-section {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.picture-section {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
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
