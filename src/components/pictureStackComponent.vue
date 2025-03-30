<template>
  <div class="main">
    <div
      v-for="(image, index) in images"
      :key="index"
      :id="'picture-' + (index + 1)"
      class="picture-card"
      :class="{ 'picture-selected': selectedImage === index }"
      :style="{
        backgroundImage: `url(${image})`,
        zIndex: selectedImage === index ? 10 : images.length - index,
        transform: getTransform(index),
      }"
      @mouseover="handleHover(index)"
      @mouseleave="resetHover"
      @click="bringToFront(index)"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const selectedImage = ref(null);

const getTransform = (index) => {
  if (selectedImage.value === index) {
    return "scale(1.2) translateY(-20px)";
  }
  const offset = (index - props.images.length / 2) * 20;
  return `translateX(${offset}px) rotate(${-offset / 2}deg)`;
};

const bringToFront = (index) => {
  selectedImage.value = selectedImage.value === index ? null : index;
};

const handleHover = (index) => {
  if (selectedImage.value === null) {
    selectedImage.value = index;
  }
};

const resetHover = () => {
  if (selectedImage.value === null) {
    selectedImage.value = null;
  }
};
</script>

<style scoped>
.picture-card {
  width: 190px;
  height: 254px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  border-radius: 20px;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  border-color: aliceblue;
}

.picture-selected {
  box-shadow: 0px 10px 40px -10px rgba(0, 0, 0, 0.5);
}
</style>
