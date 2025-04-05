<template>
  <socialsComponent
    v-for="social in socials"
    :name="social.name"
    :imageUrl="social.imageUrl"
    :link="social.link"
  />
</template>

<script setup>
import socialsComponent from "../components/socialsComponent.vue";

const socials = [
  {
    name: "LinkedIn",
    imageUrl: "src/assets/logos/linkedin.png",
    link: "https://www.linkedin.com/in/esther-wei-wen-wee-97b423177/",
  },
];
</script>

<style scoped>
.d-flex {
  margin: 2rem 0;
}
</style>
