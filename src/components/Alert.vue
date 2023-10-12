<script setup lang="ts">
import { ExclamationCircleIcon } from "@heroicons/vue/20/solid";

defineProps<{ variant: "error" }>();
</script>

<template>
  <div
    :class="[
      'flex items-center gap-3 rounded-lg p-4 text-sm',
      variant === 'error' && 'bg-red-50 text-red-800',
    ]"
  >
    <ExclamationCircleIcon class="h-4 w-4" v-if="variant === 'error'" />
    <slot></slot>
  </div>
</template>
