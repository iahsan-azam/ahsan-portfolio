<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled
        ? 'bg-slate-900/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-3xl font-bold text-cyan-400"
      >
        Ahsan<span class="text-white">.</span>
      </RouterLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8">

        <li v-for="item in navItems" :key="item.path">

          <RouterLink
            :to="item.path"
            class="hover:text-cyan-400 transition"
            active-class="text-cyan-400 font-semibold"
          >
            {{ item.name }}
          </RouterLink>

        </li>

      </ul>

      <!-- Mobile Button -->
      <button
        @click="mobileMenu = !mobileMenu"
        class="md:hidden text-white text-3xl"
      >
        ☰
      </button>

    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenu"
      class="md:hidden bg-slate-900"
    >

      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        @click="mobileMenu = false"
        class="block px-6 py-4 border-b border-slate-700 hover:bg-slate-800"
      >
        {{ item.name }}
      </RouterLink>

    </div>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const mobileMenu = ref(false)
const scrolled = ref(false)

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>