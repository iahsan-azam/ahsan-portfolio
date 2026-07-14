<template>
  <button
    v-show="showButton"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-cyan-500 text-white shadow-lg hover:bg-cyan-600 transition-all duration-300 z-50"
  >
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>