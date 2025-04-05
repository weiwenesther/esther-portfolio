<template>
  <v-btn @click="navigateToLink" class="social-btn">
    <img :src="imageUrl" class="social-icon" />
  </v-btn>
</template>

<!-- <template>
  <a :href="link" target="_blank" rel="noopener" class="social-btn">
    <img :src="imageUrl" class="social-icon" />
  </a>
</template> -->

<script setup>
// Functions defined for v-btn
const navigateToLink = () => {
  window.open(props.link, "_blank", "noopener");
};

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

// defineProps({
//   name: {
//     type: String,
//     required: true,
//   },
//   imageUrl: {
//     type: String,
//     required: true,
//   },
//   link: {
//     type: String,
//     required: true,
//   },
// });
</script>

<style scoped>
.social-btn {
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.1);
}

.social-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}
</style>
