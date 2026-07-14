<template>
  <section
  class="py-20"
  data-aos="fade-left"
>
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold">
          My <span class="text-cyan-400">Projects</span>
        </h2>

        <p class="text-slate-400 mt-4">
          Some of the projects I have built using modern web technologies.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/20 transition-all duration-300"
        >

          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-52 object-cover"
          />

          <div class="p-6">

            <h3 class="text-2xl font-bold mb-3">
              {{ project.title }}
            </h3>

            <p class="text-slate-400 mb-4">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex gap-4">

              <a
                :href="project.github"
                target="_blank"
                class="flex-1 text-center bg-cyan-500 hover:bg-cyan-600 py-2 rounded-lg transition"
              >
                GitHub
              </a>

              <a
                :href="project.demo"
                target="_blank"
                class="flex-1 text-center border border-cyan-400 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
              >
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { projects } from "../../data/projects"
</script>