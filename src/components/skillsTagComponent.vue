<template>
  <div class="tag">
    <span class="tag-text">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  margin: 10px;
}

.tag::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  padding: 3px; /* This is your border width */
  background: linear-gradient(30deg, #a78bfa, #fbcfe8);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.tag-text {
  background: linear-gradient(45deg, #a3e635, #fcd34d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
