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
          Feel free to reach out for internships, freelance work,
          collaborations, or full-time opportunities.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">

        <!-- Contact Information -->
        <div class="space-y-6">

          <div class="bg-slate-900 rounded-2xl p-6">
            <h3 class="text-cyan-400 font-bold text-xl mb-2">
              Email
            </h3>
            <p>{{ profile.contact.email }}</p>
          </div>

          <div class="bg-slate-900 rounded-2xl p-6">
            <h3 class="text-cyan-400 font-bold text-xl mb-2">
              Location
            </h3>
            <p>{{ profile.contact.location }}</p>
          </div>

          <div class="bg-slate-900 rounded-2xl p-6">
            <h3 class="text-cyan-400 font-bold text-xl mb-2">
              GitHub
            </h3>

            <a
              :href="profile.contact.github"
              target="_blank"
              rel="noopener noreferrer"
              class="text-cyan-400 hover:underline"
            >
              Visit GitHub
            </a>
          </div>

          <div class="bg-slate-900 rounded-2xl p-6">
            <h3 class="text-cyan-400 font-bold text-xl mb-2">
              LinkedIn
            </h3>

            <a
              :href="profile.contact.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-cyan-400 hover:underline"
            >
              Visit LinkedIn
            </a>
          </div>

        </div>

        <!-- Contact Form -->
        <form
          @submit.prevent="submitForm"
          class="bg-slate-900 rounded-2xl p-8"
        >

          <!-- Name -->
          <div class="mb-5">
            <label class="block mb-2">
              Name
            </label>

            <input
              v-model="form.name"
              type="text"
              name="name"
              required
              placeholder="Your name"
              class="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
            />
          </div>

          <!-- Email -->
          <div class="mb-5">
            <label class="block mb-2">
              Email
            </label>

            <input
              v-model="form.email"
              type="email"
              name="email"
              required
              placeholder="Your email"
              class="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
            />
          </div>

          <!-- Message -->
          <div class="mb-5">
            <label class="block mb-2">
              Message
            </label>

            <textarea
              v-model="form.message"
              rows="6"
              name="message"
              required
              placeholder="Write your message..."
              class="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
            ></textarea>
          </div>

          <!-- Success Message -->
          <div
            v-if="successMessage"
            class="mb-5 p-4 rounded-lg bg-green-500/20 text-green-400"
          >
            {{ successMessage }}
          </div>

          <!-- Error Message -->
          <div
            v-if="errorMessage"
            class="mb-5 p-4 rounded-lg bg-red-500/20 text-red-400"
          >
            {{ errorMessage }}
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed py-4 rounded-xl font-semibold transition"
          >
            {{ isSubmitting ? "Sending..." : "Send Message" }}
          </button>

        </form>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { profile } from "../../data/profile"

const form = ref({
  name: "",
  email: "",
  message: ""
})

const isSubmitting = ref(false)
const successMessage = ref("")
const errorMessage = ref("")

const submitForm = async () => {
  successMessage.value = ""
  errorMessage.value = ""
  isSubmitting.value = true

  try {
    const response = await fetch(
      "https://formspree.io/f/xzepvnyl",
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form.value)
      }
    )

    const data = await response.json()

    if (response.ok) {
      successMessage.value =
        "Thank you! Your message has been sent successfully."

      form.value = {
        name: "",
        email: "",
        message: ""
      }
    } else {
      errorMessage.value =
        data?.errors?.map(error => error.message).join(", ") ||
        "Something went wrong. Please try again."
    }
  } catch (error) {
    errorMessage.value =
      "Unable to send your message. Please try again later."
  } finally {
    isSubmitting.value = false
  }
}
</script>