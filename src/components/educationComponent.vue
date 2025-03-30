<template>
  <div class="card">
    <v-card flat height="200" width="300" class="white-bg">
      <v-card-text>
        <h1 class="title">{{ school }}</h1>
        <h2 class="subtitle">{{ subject }}</h2>
        <p class="subtitle">{{ year }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
defineProps({
  school: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card {
  width: 300px;
  height: 200px;
}

.title,
.subtitle {
  background: linear-gradient(90deg, #81b3fe, #a6eef4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title {
  font-size: 35px;
  font-weight: bold;
}

.subtitle {
  font-size: 20px;
}
</style>
