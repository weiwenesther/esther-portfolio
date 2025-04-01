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

    <div class="picture-section">
      <pictureStackComponent :images="images" class="picture-section" />
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
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #febd81;
  margin: 10px;
  background-color: #1a181b;
}

.info-section,
.paragraph-section,
.picture-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
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
  font-size: 38px;
  font-weight: bold;
}

.subtitle {
  font-size: 24px;
}

@media (max-width: 560px) {
  .education-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
  }

  .info-section,
  .paragraph-section,
  .picture-section {
    width: 100%;
    padding: 10px;
  }

  .paragraph-section {
    padding: 20px;
  }

  .title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 18px;
  }
}
</style>
