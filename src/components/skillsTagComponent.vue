<template>
  <div class="tag-container">
    <div
      class="tag"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <span class="tag-text">{{ text }}</span>
    </div>

    <transition name="fade">
      <div v-if="isHovered && imageSrc" class="image-container">
        <img :src="imageSrc" class="logo" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isHovered = ref(false);

defineProps({
  text: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.tag-container {
  position: relative;
  display: inline-block;
}

.tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  margin: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.tag:hover {
  box-shadow: 0 0 15px rgba(167, 139, 250, 0.5),
    0 0 30px rgba(251, 207, 232, 0.3);
  transform: translateY(-3px);
}

.tag::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  padding: 2px; /*border width*/
  background: linear-gradient(30deg, #a78bfa, #fbcfe8);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.tag-text {
  background: linear-gradient(45deg, #a3e635, #fcd34d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.image-container {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  /* margin-top: 10px; */
  width: 80px;
  height: 80px;

  overflow: hidden;
  z-index: 10;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}
</style>
