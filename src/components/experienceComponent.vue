<!-- Flip card -->
<template>
  <div class="flip-card-wrapper">
    <div class="flip-card">
      <div class="flip-card-inner">
        <!-- Front -->
        <div class="flip-card-front">
          <v-card width="400">
            <v-card-text>
              <h1 class="title">{{ experience }}</h1>
              <h2 class="subtitle">{{ position }}</h2>
              <p class="subtitle">{{ year }}</p>
            </v-card-text>
          </v-card>
        </div>

        <!-- Back -->
        <div class="flip-card-back">
          <v-card width="400">
            <v-card-text>
              <ul class="description">
                <li v-for="(item, index) in description" :key="index">
                  {{ item }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experience: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.flip-card-wrapper {
  display: inline-block;
  margin: 20px;
}

.flip-card,
.flip-card-inner {
  width: 300px;
}

.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  height: 210px;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2px solid #81b3fe;
  background-color: #1a181b;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

.flip-card-back {
  transform: rotateY(180deg);
}

.title,
.subtitle {
  background: linear-gradient(90deg, #81b3fe, #e0a6f4);
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

.description {
  font-size: 16px;
  line-height: 1;
  text-align: left;
  color: #f1f1f1;
  max-width: 250px;
}

.description li {
  margin-bottom: 5px;
  padding-left: 15px;
  position: relative;
}
</style>
