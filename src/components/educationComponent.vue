<template>
  <div class="education-container">
    <v-card flat class="info-section">
      <v-card-text>
        <h1 class="title">{{ school }}</h1>
        <h2 class="subtitle">{{ subject }}</h2>
        <p class="subtitle">{{ year }}</p>
      </v-card-text>
    </v-card>

    <div class="paragraph-section">
      <descriptionComponent :paragraph="paragraph" />
    </div>

    <!-- <div class="picture-section"> -->
    <pictureStackComponent :images="images" class="picture-section" />
    <!-- </div> -->
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
  paragraph: {
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
  height: 100%;
  padding: 20px;
}

.info-section,
.paragraph-section,
.picture-section {
  flex: 1;
  /* display: flex; */
  align-items: center;
  justify-content: center;
}

.info-section {
  min-width: 250px;
  flex-direction: column;
  text-align: center;
}

.paragraph-section {
  padding: 0 40px;
  text-align: left;
}

.picture-section img {
  object-fit: contain;
}

.title,
.subtitle {
  background: linear-gradient(90deg, #febd81, #bff4a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.title {
  font-size: 35px;
  font-weight: bold;
}

.subtitle {
  font-size: 20px;
}
</style>
