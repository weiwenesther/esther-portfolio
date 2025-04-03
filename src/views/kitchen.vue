<template>
  <div class="d-flex flex-row flex-wrap gap-4 justify-center">
    <educationComponent2
      v-for="edu in education"
      :key="edu.id"
      :education="edu.school"
      :description="edu.subject"
      :year="edu.year"
      :imageSrc="edu.image"
    />
  </div>
</template>

<script setup>
import educationComponent2 from "../components/educationComponent2.vue";
import { ref } from "vue";

const education = [
  {
    id: "edu1",
    school: "Gamuda AI Academy",
    subject: "AI and Full Stack Development",
    year: "January - March 2025",
    image: "src/assets/GamudaAIAcademy/IMG_3430.JPG",
  },
  {
    id: "edu2",
    school: "University of Nottingham",
    subject: "MEng in Chemical Engineering",
    year: "September 2017 - August 2021",
    image: "src/assets/Nottingham/IMG_3498.JPG",
  },
];
</script>

<style scoped>
.d-flex {
  margin: 2rem 0;
}
</style>
