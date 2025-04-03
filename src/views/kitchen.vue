<template>
  <div class="d-flex flex-row flex-wrap gap-4 justify-center">
    <skillsTagComponent
      v-for="skill in skills"
      :key="skill.name"
      :text="skill.name"
      :imageSrc="skill.image"
    ></skillsTagComponent>
  </div>
</template>

<script setup>
import educationComponent2 from "../components/educationComponent2.vue";
import { ref } from "vue";
import skillsTagComponent from "../components/skillsTagComponent.vue";

const skills = [
  {
    name: "Vue.js",
    image: "src/assets/logos/vue.svg",
  },
  { name: "JavaScript", image: "src/assets/logos/Javascript-logo.png" },
  { name: "HTML", image: "src/assets/logos/html-5.png" },
  { name: "CSS", image: "src/assets/logos/CSS3.webp" },
  { name: "Python", image: "src/assets/logos/python-logo.png" },
  { name: "PowerBI", image: "src/assets/logos/powerBI.png" },
];
</script>

<style scoped>
.d-flex {
  margin: 2rem 0;
}
</style>
