<template>
  <div
  class="..."
  data-aos="zoom-in"
>
  >
    <component
      :is="icon"
      class="w-12 h-12 text-cyan-400 mx-auto mb-4"
    />

    <h3 class="text-xl font-semibold">
      {{ title }}
    </h3>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: Object,
})
</script>