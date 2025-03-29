<template>
  <v-app>
    <v-container class="section d-flex justify-center align-center">
      <headerComponent
        title="Hello! I'm Esther."
        subtitle="An Engineer turned Software Developer."
      ></headerComponent>
    </v-container>

    <v-container
      class="section d-flex justify-center align-center snap-section"
    >
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
                'Develop interactive Power BI dashboards for real-time data visualization, automating monitoring and analysis processes.',
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
  </v-app>
</template>

<script setup>
import headerComponent from "./components/headerComponent.vue";
import sectionComponent from "./components/sectionComponent.vue";
import skillsTagComponent from "./components/skillsTagComponent.vue";
import experienceComponent from "./components/experienceComponent.vue";
import quotesComponent from "./components/quotesComponent.vue";
import descriptionComponent from "./components/descriptionComponent.vue";

const skills = ["Vue.js", "JavaScript", "HTML", "CSS", "Python"];
</script>

<style>
html,
body {
  background-color: black;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  /* scroll-behavior: smooth; */
  overflow-x: hidden;
}

.section {
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-container {
  max-width: 100% !important;
}

.snap-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

/* Make the parent scrollable */
.v-app {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
</style>
