<template>
  <div>
    <experienceComponent2
      experience="Software Engineer"
      year="2020-2023"
      :description="[
        'Developed full-stack applications',
        'Led a team of 5 developers',
      ]"
      :skills="['Vue.js', 'JavaScript', 'Node.js', 'Express']"
    />
  </div>
</template>

<script setup>
import experienceComponent2 from "../components/experienceComponent2.vue";
</script>

<style scoped></style>
