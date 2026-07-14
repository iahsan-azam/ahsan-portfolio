<template>
  <section
  class="py-20"
  data-aos="zoom-in"
>

    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-16">

        <h2 class="text-5xl font-bold">
          My <span class="text-cyan-400">Skills</span>
        </h2>

        <p class="text-slate-400 mt-4">
          Technologies I use to build professional web applications.
        </p>

      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        <div
          v-for="skill in skills"
          :key="skill"
          class="bg-slate-800 rounded-2xl p-8 text-center hover:bg-cyan-500 hover:scale-105 transition duration-300 cursor-pointer"
        >
          <h3 class="font-semibold text-lg">
            {{ skill }}
          </h3>
        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
const skills = [
  "Front-End Development",
  "Vue.js",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Node.js",
  "Git",
  "GitHub"
]
</script>