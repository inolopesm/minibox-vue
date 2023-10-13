<script setup lang="ts">
defineProps<{ disabled?: boolean }>();
defineEmits<{ (event: "click"): void }>();
</script>

<template>
  <button
    type="button"
    class="cursor-pointer border-transparent bg-transparent text-left text-blue-700 transition hover:bg-blue-50 disabled:text-gray-400"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
