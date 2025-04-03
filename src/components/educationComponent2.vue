<template>
  <div class="hover-container">
    <div
      class="hover-box"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="education-content">
        <h3 class="education-title">{{ education }}</h3>
        <p v-if="description" class="education-description">
          {{ description }}
        </p>
        <div class="education-year">{{ year }}</div>
      </div>
    </div>

    <transition name="fade-slide">
      <div v-if="isHovered" class="image-container">
        <img :src="imageSrc" class="hover-image" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  year: {
    type: String,
    default: "",
  },
});

const isHovered = ref(false);
</script>

<style scoped>
.hover-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
}

.hover-box {
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.hover-box:hover {
  border-left: 3px solid #fbae95;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.education-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.education-title {
  margin: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ab83fe, #fbae96);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.education-description {
  font-size: 0.9rem;
  font-weight: bold;
  margin: 5px;
  background: linear-gradient(90deg, #c0f0ff, #a9fe81);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.education-year {
  font-size: 0.8rem;
  color: #e0a6f4;
}

.image-container {
  position: absolute;
  right: -320px;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.hover-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Transition for the image */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px) translateY(-50%);
}
</style>
