<template>
  <v-card class="text-card" flat>
    <v-card-text>
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
      <p v-if="aboutMe" class="styled-text" v-html="aboutMe"></p>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  aboutMe: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap");

.text-card {
  padding: 20px;
  text-align: left;
}

.title {
  font-size: clamp(40px, 8vw, 96px);
  font-weight: bold;
  background: linear-gradient(
    30deg,
    #ab83fe 0%,
    #fe81e5 33%,
    #81fea9 66%,
    #81c0fe 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-weight: 600;
  font-size: clamp(24px, 5vw, 68px);
  background: linear-gradient(
    30deg,
    #a9fe81 0%,
    #81fefe 33%,
    #c0f0ff 66%,
    #fe81a9 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 10px;
}

.styled-text {
  font-size: clamp(18px, 2.5vw, 28px);
  font-weight: bold;
  color: #a2c3ff;
  font-family: "Just Me Again Down Here", cursive;
  letter-spacing: 2px;
  margin-top: 20px;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.title,
.subtitle {
  background-size: 300% 300%;
  animation: gradientMove 8s ease-in-out infinite;
}
</style>
