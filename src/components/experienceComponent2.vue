<!-- Accordian -->
<template>
  <div
    class="wrapper"
    @mouseenter="isVisible = true"
    @mouseleave="isVisible = false"
  >
    <v-btn class="button">
      <div class="button-content">
        <div class="experience">{{ experience }}</div>
        <div class="year">{{ year }}</div>
      </div>
    </v-btn>

    <transition name="fade" mode="out-in">
      <v-container
        v-if="isVisible"
        :class="{
          'active-content-container': isVisible,
          'inactive-content-container': !isVisible,
        }"
      >
        <div v-if="description && description.length > 0">
          <p v-for="(item, index) in description" :key="index">{{ item }}</p>
        </div>

        <!-- Skills tags section -->
        <div v-if="skills && skills.length > 0" class="skills-container">
          <skillsTagComponent
            v-for="(skill, index) in skills"
            :key="index"
            :text="skill"
          />
        </div>
      </v-container>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import skillsTagComponent from "./skillsTagComponent.vue";

const isVisible = ref(false);

const props = defineProps({
  experience: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    default: () => [],
  },
  skills: {
    type: Array,
    default: () => [],
  },
  initialState: {
    type: Boolean,
    default: false,
  },
});

// Set initial visibility state from props
isVisible.value = props.initialState;
</script>

<style scoped>
.wrapper {
  position: relative;
  /* width: 600px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  position: relative;
  z-index: 1;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 580px;
  height: auto;
  border: 2px solid #81b3fe;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(129, 179, 254, 0.3);
}

.button-content {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

.experience {
  font-weight: bold;
  text-align: left;
  font-size: 1.25rem;
  background: linear-gradient(90deg, #81b3fe, #e0a6f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.year {
  text-align: right;
  margin-left: 20px;
  background: linear-gradient(90deg, #81b3fe, #e0a6f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.active-content-container {
  display: block;
  margin-top: 5px;
  padding: 15px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
}

.inactive-content-container {
  display: none;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 15px;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
