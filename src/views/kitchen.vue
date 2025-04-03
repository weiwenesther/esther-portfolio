<template>
  <v-row>
    <v-col>
      <div class="d-flex flex-row flex-wrap gap-4 justify-center">
        <experienceComponent2
          v-for="exp in experiences"
          :key="exp.id"
          v-bind="exp"
          :is-active="activeExperienceId === exp.id"
          @mouse-enter="activeExperienceId = exp.id"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import experienceComponent2 from "../components/experienceComponent2.vue";

import { ref, provide } from "vue";

const activeExperienceId = ref(null);

const experiences = [
  {
    id: "exp1",
    experience: "Process and Equipment Engineer @ Intel Corporation",
    year: "October 2021 - January 2025",
    description: [
      "Developed full-stack applications",
      "Led a team of 5 developers",
    ],
    skills: ["Vue.js", "JavaScript", "Node.js", "Express"],
  },
  {
    id: "exp2",
    experience: "Process and Equipment Engineer @ Intel Corporation",
    year: "October 2021 - January 2025",
    description: [
      "Developed full-stack applications",
      "Led a team of 5 developers",
    ],
    skills: ["Vue.js", "JavaScript", "Node.js", "Express"],
  },
];
</script>

<style scoped></style>
