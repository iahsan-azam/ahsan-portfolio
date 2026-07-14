<template>
  <section class="py-24 bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Heading -->
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold">
          Why <span class="text-cyan-400">Hire Me?</span>
        </h2>

        <p class="mt-4 text-slate-400 max-w-2xl mx-auto">
          I focus on building clean, responsive, and user-friendly web applications
          using modern technologies while continuously improving my skills.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div
          v-for="item in features"
          :key="item.title"
          class="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
        >
          <div class="text-5xl mb-5">
            {{ item.icon }}
          </div>

          <h3 class="text-xl font-bold mb-3">
            {{ item.title }}
          </h3>

          <p class="text-slate-400">
            {{ item.description }}
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: "💻",
    title: "Modern Development",
    description:
      "Build responsive and modern web applications using Vue.js, HTML, CSS and JavaScript."
  },
  {
    icon: "⚡",
    title: "Fast Learner",
    description:
      "Always learning new technologies and following modern development practices."
  },
  {
    icon: "🎓",
    title: "Strong Education",
    description:
      "BS in Software Engineering and currently pursuing an MS in Computer Software Engineering."
  },
  {
    icon: "🚀",
    title: "Problem Solver",
    description:
      "Enjoy solving real-world problems by creating scalable and user-friendly software solutions."
  }
]
</script>