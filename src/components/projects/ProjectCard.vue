<template>
 <div
  class="..."
  data-aos="zoom-in"
>
    <!-- Project Image -->
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full h-56 object-cover"
    />

    <!-- Content -->
    <div class="p-6">

      <h3 class="text-2xl font-bold mb-3">
        {{ project.title }}
      </h3>

      <p class="text-slate-400 leading-7 mb-6">
        {{ project.description }}
      </p>
<!-- Project Status -->
<div class="mb-4">
  <span
    class="px-3 py-1 rounded-full text-sm"
    :class="
      project.status === 'Completed'
        ? 'bg-green-500/20 text-green-400'
        : 'bg-yellow-500/20 text-yellow-400'
    "
  >
    {{ project.status }}
  </span>
</div>
      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-6">

        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
        >
          {{ tech }}
        </span>

      </div>

      <!-- Buttons -->
      <div class="flex gap-4">

        <a
          :href="project.github"
          target="_blank"
          class="flex-1 text-center py-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
        >
          GitHub
        </a>

        <a
          :href="project.demo"
          target="_blank"
          class="flex-1 text-center py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
        >
          Live Demo
        </a>

      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>