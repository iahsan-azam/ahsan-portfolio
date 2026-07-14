<template>
  <section
  class="py-20"
  data-aos="fade-up"
>
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold">
          Get In <span class="text-cyan-400">Touch</span>
        </h1>

        <p class="text-slate-400 mt-4">
          Feel free to reach out for internships, freelance work, collaborations, or full-time opportunities.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">

        <!-- Contact Information -->
        <div class="space-y-6">

          <div class="bg-slate-900 rounded-2xl p-6">
            <h3 class="text-cyan-400 font-bold text-xl mb-2">Email</h3>
            <p>{{ profile.contact.email }}</p>
          </div>

          <div class="bg-slate-900 rounded-2xl p-6">
            <h3 class="text-cyan-400 font-bold text-xl mb-2">Location</h3>
            <p>{{ profile.contact.location }}</p>
          </div>

          <div class="bg-slate-900 rounded-2xl p-6">
            <h3 class="text-cyan-400 font-bold text-xl mb-2">GitHub</h3>
            <a
              :href="profile.contact.github"
              target="_blank"
              class="text-cyan-400 hover:underline"
            >
              Visit GitHub
            </a>
          </div>

          <div class="bg-slate-900 rounded-2xl p-6">
            <h3 class="text-cyan-400 font-bold text-xl mb-2">LinkedIn</h3>
            <a
              :href="profile.contact.linkedin"
              target="_blank"
              class="text-cyan-400 hover:underline"
            >
              Visit LinkedIn
            </a>
          </div>

        </div>

        <!-- Contact Form -->
        <form class="bg-slate-900 rounded-2xl p-8">

          <div class="mb-5">
            <label class="block mb-2">Name</label>
            <input
              type="text"
              class="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
            />
          </div>

          <div class="mb-5">
            <label class="block mb-2">Email</label>
            <input
              type="email"
              class="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
            />
          </div>

          <div class="mb-5">
            <label class="block mb-2">Message</label>
            <textarea
              rows="6"
              class="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
            ></textarea>
          </div>

          <button
            class="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  </section>
</template>

<script setup>
import { profile } from "../../data/profile"
</script>