<template>
  <section
  class="min-h-screen bg-slate-950 text-white flex items-center py-20"
  data-aos="fade-up"
>
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

      <!-- Left Content -->
      <div>

        <p class="text-cyan-400 text-lg mb-4">
          👋 Hello, I'm
        </p>

        <h1 class="text-5xl md:text-7xl font-bold leading-tight">
          {{ profile.name }}
        </h1>

        <h2 class="text-3xl text-slate-300 mt-4">
          {{ profile.title }}
        </h2>

        <p class="text-xl text-cyan-400 mt-2 h-8">
  <span ref="typedElement"></span>
</p>

        <p class="text-slate-400 leading-8 mt-8 max-w-xl">
          {{ profile.tagline }}
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4 mt-10">

          <RouterLink
            to="/contact"
            class="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            Hire Me
          </RouterLink>

          <a
            href="/resume/Ahsan-Azam-CV.pdf"
            download
            class="border border-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-slate-950 transition duration-300"
          >
            Download CV
          </a>

        </div>

        <!-- Social Icons -->
        <div class="flex gap-6 mt-8">

          <a
            :href="profile.contact.github"
            target="_blank"
            class="hover:text-cyan-400 transition duration-300"
          >
            <Github :size="28" />
          </a>

          <a
            :href="profile.contact.linkedin"
            target="_blank"
            class="hover:text-cyan-400 transition duration-300"
          >
            <Linkedin :size="28" />
          </a>

          <a
            :href="'mailto:' + profile.contact.email"
            class="hover:text-cyan-400 transition duration-300"
          >
            <Mail :size="28" />
          </a>

        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-6 mt-12">

          <div
            v-for="stat in profile.stats"
            :key="stat.label"
            class="bg-slate-900 rounded-xl p-6 text-center shadow-lg"
          >
            <h3 class="text-3xl font-bold text-cyan-400">
              {{ stat.number }}
            </h3>

            <p class="text-slate-400 mt-2">
              {{ stat.label }}
            </p>
          </div>

        </div>

      </div>

      <!-- Right Content -->
      <div class="flex justify-center">

        <div class="relative">

          <!-- Glow -->
          <div
            class="absolute -inset-4 rounded-full bg-cyan-500 opacity-20 blur-3xl"
          ></div>

          <!-- Profile Image -->
          <img
            src="/images/profile.png"
            alt="Ahsan Azam"
            class="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router"
import { Github, Linkedin, Mail } from "lucide-vue-next"
import { profile } from "../../data/profile"

import { ref, onMounted, onBeforeUnmount } from "vue"
import Typed from "typed.js"

const typedElement = ref(null)

let typed

onMounted(() => {
  typed = new Typed(typedElement.value, {
    strings: [
      "Software Engineer",
      "Front-End Developer",
      "Vue.js Developer",
      "JavaScript Developer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  })
})

onBeforeUnmount(() => {
  if (typed) {
    typed.destroy()
  }
})
</script>