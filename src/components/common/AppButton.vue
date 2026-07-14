<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :target="target"
    :class="buttonClass"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  tag: {
    type: String,
    default: 'button'
  },
  to: String,
  href: String,
  target: String
})

const buttonClass = computed(() => [
  'inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition duration-300',
  props.variant === 'primary'
    ? 'bg-cyan-500 text-white hover:bg-cyan-600'
    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950'
])
</script>