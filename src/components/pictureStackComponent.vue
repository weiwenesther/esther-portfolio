<template>
  <div class="main">
    <div
      v-for="(image, index) in imageStack"
      :key="image"
      class="picture-card"
      :style="{
        zIndex: images.length - index,
        transform: getTransform(index),
      }"
      @click="shuffleImage(index)"
    >
      <img :src="image" class="picture-image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const imageStack = ref([...props.images]);

const getTransform = (index) => {
  const offset = index * 5;
  return `translateY(${offset}px) scale(${1 - index * 0.05})`;
};

const shuffleImage = (index) => {
  const clickedImage = imageStack.value.splice(index, 1)[0];
  imageStack.value.push(clickedImage);
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.picture-card {
  position: absolute;
  width: 80%;
  max-width: 260px;
  height: auto;
  aspect-ratio: 3/4;
  transition: transform 0.4s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  overflow: hidden;
}

.picture-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.picture-card:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
}

.picture-card:active {
  transform: scale(0.98);
}
</style>
