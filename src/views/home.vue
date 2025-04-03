<template>
  <v-app>
    <div class="wrapper">
      <!-- Introduction (fixed banner)-->
      <div class="banner">
        <v-container class="section d-flex justify-center align-center">
          <headerComponent
            title="Hello! I'm Esther."
            subtitle="An Engineer turned Software Developer."
            aboutMe="AI-driven web developer with a strong analytical background in process optimization and data-driven problem-solving. Experienced in integrating AI into full-stack applications. Passionate about building intelligent, user-friendly digital solutions that enhance efficiency and decision-making."
          ></headerComponent>
        </v-container>
      </div>

      <!-- Second layer-->
      <div class="second-layer">
        <!-- Skills section -->
        <v-container class="section d-flex justify-center align-center">
          <div class="d-flex flex-wrap justify-center gap-6">
            <sectionComponent section="Skills"></sectionComponent>
            <div>
              <skillsTagComponent
                v-for="skill in skills"
                :key="skill.name"
                :text="skill.name"
                :imageSrc="skill.image"
              ></skillsTagComponent>
            </div>
          </div>
        </v-container>

        <!-- Experience section -->
        <v-container class="section d-flex justify-center align-center">
          <v-row class="d-flex flex-column align-center" style="width: 100%">
            <v-col cols="12" class="text-center">
              <sectionComponent section="Experiences"></sectionComponent>
            </v-col>

            <v-row class="justify-center gap-4">
              <div class="experienceComponent">
                <experienceComponent2
                  v-for="exp in experiences"
                  :key="exp.id"
                  v-bind="exp"
                  :is-active="activeExperienceId === exp.id"
                  @mouse-enter="activeExperienceId = exp.id"
                />
              </div>
            </v-row>
          </v-row>
        </v-container>

        <!-- Education section -->
        <v-container class="section d-flex justify-center align-center">
          <v-row>
            <v-col cols="12" class="text-center">
              <sectionComponent section="Education"></sectionComponent>
            </v-col>

            <v-col cols="12" class="text-center">
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
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import headerComponent from "../components/headerComponent.vue";
import sectionComponent from "../components/sectionComponent.vue";
import skillsTagComponent from "../components/skillsTagComponent.vue";
import experienceComponent from "../components/experienceComponent.vue";
import quotesComponent from "../components/quotesComponent.vue";
import descriptionComponent from "../components/descriptionComponent.vue";
import pictureStackComponent from "../components/pictureStackComponent.vue";
import educationComponent from "../components/educationComponent.vue";
import experienceComponent2 from "../components/experienceComponent2.vue";
import educationComponent2 from "../components/educationComponent2.vue";

import { ref } from "vue";

const skills = [
  {
    name: "Vue.js",
    image: "src/assets/logos/vue.svg",
  },
  { name: "JavaScript", image: "src/assets/logos/Javascript-logo.png" },
  { name: "HTML", image: "src/assets/logos/html-5.png" },
  { name: "CSS", image: "src/assets/logos/css3.png" },
  { name: "Python", image: "src/assets/logos/python-logo.png" },
  { name: "PowerBI", image: "src/assets/logos/powerBI.png" },
];

// Remove the provide/inject pattern
const activeExperienceId = ref(null);
const experiences = [
  {
    id: "exp1",
    experience: "Process and Equipment Engineer @ Intel Corporation",
    year: "October 2021 - January 2025",
    description: [
      "Led cross-functional teams using statistical analysis and data-driven problem-solving to optimize processes and equipment.",
    ],
    skills: ["PowerBI", "JMP", "Process Optimization"],
  },
  {
    id: "exp2",
    experience: "Research Assistant @ The University of Nottingham Malaysia",
    year: "June 2020 - September 2020",
    description: [
      "Developed an artificial neural network (ANN) model in MATLAB to predict adsorption processes in wastewater treatment.",
      "Authored a technical paper on the research findings.",
    ],
    skills: ["MATLAB", "Technical Writing", "Machine Learning"],
  },
];

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

<style>
.wrapper {
  width: 100%;
  /* min-height: 200vh; */
  overflow-x: hidden;
}

.banner {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  /* background-image: url("src/assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  background-color: #1a181b;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.second-layer {
  position: absolute;
  top: 90vh;
  left: 0;
  min-height: 110vh;
  min-width: 100%;
  width: 100%;
  background-color: #27272c;
  z-index: 2;
  display: flex;
  gap: 50px; /* Add padding between each section*/
  padding: 50px 0;
  flex-direction: column;
  border-radius: 30px 30px 0 0;
  overflow-x: hidden;
}

.section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.experienceComponent {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.second-layer.show {
  opacity: 1;
}

.v-app {
  height: auto;
  overflow-y: auto;
  scroll-snap-type: none;
}
</style>
