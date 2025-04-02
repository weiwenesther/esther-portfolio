<template>
  <v-btn class="button" @click="isVisible = !isVisible">
    <div class="button-content">
      <div class="experience">{{ experience }}</div>
      <div class="year">{{ year }}</div>
    </div>
  </v-btn>

  <v-expand-transition>
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
    </v-container>
  </v-expand-transition>
</template>

<script setup>
import { ref } from "vue";

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
  initialState: {
    type: Boolean,
    default: false,
  },
});

// Set initial visibility state from props
isVisible.value = props.initialState;
</script>

<style scoped>
.button {
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
}

.button-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.experience {
  font-weight: bold;
  text-align: left;
}

.year {
  text-align: right;
  margin-left: 20px;
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
</style>
