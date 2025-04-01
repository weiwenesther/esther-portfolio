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

      <!-- Skills section (onto second layer)-->
      <div class="second-layer">
        <v-container class="section d-flex justify-center align-center">
          <div class="d-flex flex-wrap justify-center gap-6">
            <sectionComponent section="Skills"></sectionComponent>
            <div>
              <skillsTagComponent
                v-for="skill in skills"
                :key="skill"
                :text="skill"
              ></skillsTagComponent>
            </div>
          </div>
        </v-container>

        <!-- Experience section -->
        <v-container class="section d-flex justify-center align-center">
          <v-row
            class="d-flex flex-column align-center"
            style="width: 100%; max-width: 1200px"
          >
            <v-col cols="12" class="text-center">
              <sectionComponent section="Experiences"></sectionComponent>
            </v-col>
            <v-row class="justify-center gap-4">
              <v-col cols="12" md="6" lg="4">
                <experienceComponent
                  experience="Intel Corporation"
                  position="Process and Equipment Engineer"
                  year="October 2021 - January 2024"
                  :description="[
                    'Collaborated with cross-functional global teams to develop and implement data-driven solutions for process enhancement, ensuring seamless alignment across manufacturing sites.',
                    'Implemented advanced analytics tools to identify root causes of process failures and suggest corrective actions.',
                  ]"
                ></experienceComponent>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <experienceComponent
                  experience="University of Nottingham"
                  position="Research Assistant"
                  year="June 2020 - September 2020"
                  :description="[
                    'Developed an Artificial Neural Network (ANN) model in MATLAB to predict adsorption processes in wastewater treatment, optimizing efficiency.',
                    'Conducted data-driven analysis and authored a technical publication on AI applications in chemical engineering.',
                  ]"
                ></experienceComponent>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <experienceComponent
                  experience="SynergenOG"
                  position="Process Safety Engineer Internship"
                  year="June 2019 - September 2019"
                  :description="[
                    'Conducted Fire and Explosion Analysis & Quantitative Risk Analysis (QRA) using PHAST modeling for a petrochemical refinery plant.',
                    'Designed statistical risk models to assess safety compliance and mitigate hazards.',
                  ]"
                ></experienceComponent>
              </v-col>
            </v-row>
          </v-row>
        </v-container>

        <!-- Education section -->
        <v-container class="section d-flex justify-center align-center">
          <v-row
            class="d-flex flex-column align-center"
            style="width: 100%; max-width: 1200px"
          >
            <v-col cols="12" class="text-center">
              <sectionComponent section="Education"></sectionComponent>
            </v-col>

            <!-- First Education -->
            <v-row class="justify-center w-100 mb-8">
              <v-col cols="12">
                <educationComponent
                  school="Gamuda AI Academy"
                  subject="AI and Full Stack Development"
                  year="January - March 2025"
                  :paragraph="[
                    'Gained hands-on experience in AI, full-stack development, and Google Cloud Platform (GCP).',
                    'Developed a full-stack web app using Vue.js and FastAPI for personalized meal planning.',
                    'Integrated AI for image-based ingredient recognition and personalised recommendation system with RAG.',
                  ]"
                  :images="[
                    'src/assets/GamudaAIAcademy/IMG_3425.JPG',
                    'src/assets/GamudaAIAcademy/IMG_3429.JPG',
                    'src/assets/GamudaAIAcademy/IMG_3430.JPG',
                  ]"
                />
              </v-col>
            </v-row>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import headerComponent from "./components/headerComponent.vue";
import sectionComponent from "./components/sectionComponent.vue";
import skillsTagComponent from "./components/skillsTagComponent.vue";
import experienceComponent from "./components/experienceComponent.vue";
import quotesComponent from "./components/quotesComponent.vue";
import descriptionComponent from "./components/descriptionComponent.vue";
import pictureStackComponent from "./components/pictureStackComponent.vue";
import educationComponent from "./components/educationComponent.vue";

import { ref, onMounted, onUnmounted } from "vue";

const skills = ["Vue.js", "JavaScript", "HTML", "CSS", "Python"];
</script>

<style>
.wrapper {
  width: 100%;
  min-height: 200vh;
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

.second-layer.show {
  opacity: 1;
}

.v-app {
  height: auto;
  overflow-y: auto;
  scroll-snap-type: none;
}
</style>
