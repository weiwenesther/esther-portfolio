<template>
  <div>
    <experienceComponent2 :jobs="jobsData" maxWidth="900px" />
  </div>
</template>

<script setup>
import experienceComponent2 from "../components/experienceComponent2.vue";

// Sample jobs data
const jobsData = [
  {
    title: "Software Engineer @ Tech Company",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    website: "https://example.com",
    description:
      "Developed and maintained full-stack applications using Vue.js and Node.js.",
    skills: ["Vue.js", "JavaScript", "Node.js", "Express", "MongoDB"],
    logo: "/images/tech-company-logo.png",
  },
  {
    title: "Frontend Developer @ Startup",
    duration: "2020 - 2022",
    location: "Remote",
    website: "https://startup.com",
    description:
      "Built responsive web applications and implemented UI/UX designs.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    logo: "/images/startup-logo.png",
  },
  {
    title: "Web Developer Intern",
    duration: "2019 - 2020",
    location: "New York, NY",
    description: "Assisted in developing and maintaining company websites.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
  text-align: center;
}
</style>
