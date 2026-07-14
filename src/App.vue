<template>
  <Navbar />

  <RouterView />

  <Footer />

  <BackToTop />
</template>

<script setup>
import Navbar from "./components/layout/Navbar.vue"
import Footer from "./components/layout/Footer.vue"
import BackToTop from "./components/common/BackToTop.vue"
</script>