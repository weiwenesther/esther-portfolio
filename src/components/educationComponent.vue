<template>
  <div class="education-container">
    <v-card
      flat
      class="info-section"
      @mouseover="showDescription = true"
      @mouseleave="showDescription = false"
    >
      <div class="description-overlay" :class="{ visible: showDescription }">
        <descriptionComponent :paragraph="paragraph" />
      </div>

      <v-card-text>
        <h1 class="title">{{ school }}</h1>
        <h2 class="subtitle">{{ subject }}</h2>
        <p class="subtitle">{{ year }}</p>
      </v-card-text>
    </v-card>

    <div class="picture-section">
      <pictureStackComponent :images="images" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
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

const showDescription = ref(false);
</script>

<style scoped>
.education-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
  width: 100%;
  /* height: 100%; */
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #febd81;
  margin: 10px;
  background-color: #1a181b;
}

.info-section {
  flex: 0 0 45%;
  position: relative;
  min-width: 250px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 50%;
}

.picture-section {
  flex: 0 0 45%;
  height: 400px;
  min-height: 400px; /* Add this to ensure minimum height */
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;
}

.description-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 24, 27, 0.95);
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.3s ease, transform 0.3s ease;
  border-radius: 20px;
  z-index: 10;
  pointer-events: none;
}

.description-overlay.visible {
  opacity: 1;
  transform: scale(1);
}

/* .paragraph-section {
  padding: 0 40px;
  text-align: left;
} */

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
