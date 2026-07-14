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
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          v-for="group in profile.skills"
          :key="group.category"
          class="bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition"
        >

          <h3 class="text-2xl font-semibold text-cyan-400 mb-6">
            {{ group.category }}
          </h3>

          <div
            v-for="skill in group.items"
            :key="skill.name"
            class="mb-6"
          >

            <div class="flex justify-between mb-2">
              <span>{{ skill.name }}</span>
              <span>{{ skill.level }}%</span>
            </div>

            <div class="w-full bg-slate-700 rounded-full h-3">
              <div
                class="bg-cyan-400 h-3 rounded-full transition-all duration-700"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { profile } from "../../data/profile"
</script>