<template>
  <section class="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
    <div class="max-w-5xl mx-auto text-center px-6">

      <h2 class="text-5xl font-bold mb-6">
        Let's Build Something
        <span class="text-cyan-400">Amazing Together</span>
      </h2>

      <p class="text-slate-300 text-lg leading-8 max-w-3xl mx-auto mb-10">
        I'm always interested in new opportunities, freelance projects,
        internships, and collaborations. If you have an idea or project,
        let's discuss how we can bring it to life.
      </p>

      <div class="flex flex-wrap justify-center gap-5">

        <RouterLink
          to="/contact"
          class="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
        >
          Contact Me
        </RouterLink>

        <a
          href="/resume/Ahsan-Azam-CV.pdf"
          download
          class="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition"
        >
          Download Resume
        </a>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>