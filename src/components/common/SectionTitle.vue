<template>
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold">
      {{ title }}
      <span class="text-cyan-400">{{ highlight }}</span>
    </h2>

    <p
      v-if="description"
      class="mt-4 max-w-2xl mx-auto text-slate-400"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  highlight: String,
  description: String,
})
</script>