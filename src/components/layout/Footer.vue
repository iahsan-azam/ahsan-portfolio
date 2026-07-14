<template>
  <footer class="bg-slate-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid md:grid-cols-3 gap-10">

        <!-- About -->
        <div>
          <h2 class="text-3xl font-bold text-cyan-400">
            Ahsan Azam
          </h2>

          <p class="mt-4 text-slate-400 leading-7">
            Software Engineer specializing in Vue.js, JavaScript,
            HTML, CSS, and modern responsive web applications.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul class="space-y-3">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/skills">Skills</RouterLink></li>
            <li><RouterLink to="/projects">Projects</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p class="text-slate-400">
            📧 iahsanazam@gmail.com
          </p>

          <p class="text-slate-400 mt-2">
            📍 Pakistan
          </p>

          <div class="flex gap-5 mt-6">

            <a
              :href="profile.contact.github"
              target="_blank"
              class="hover:text-cyan-400 transition"
            >
              <Github :size="28" />
            </a>

            <a
              :href="profile.contact.linkedin"
              target="_blank"
              class="hover:text-cyan-400 transition"
            >
              <Linkedin :size="28" />
            </a>

            <a
              :href="'mailto:' + profile.contact.email"
              class="hover:text-cyan-400 transition"
            >
              <Mail :size="28" />
            </a>

          </div>

        </div>

      </div>

      <hr class="my-10 border-slate-700">

      <div class="text-center text-slate-500">
        © {{ new Date().getFullYear() }} Ahsan Azam.
        All Rights Reserved.
      </div>

    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router"
import { Github, Linkedin, Mail } from "lucide-vue-next"
import { profile } from "../../data/profile"
</script>