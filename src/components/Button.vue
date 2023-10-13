<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "tertiary";
    disabled?: boolean;
  }>(),
  { variant: "primary" }
);

defineEmits<{ (event: "click"): void }>();
</script>

<template>
  <button
    type="button"
    :class="[
      'inline-flex min-w-[4rem] cursor-pointer items-center justify-center rounded border px-2 py-1.5 text-sm font-medium uppercase leading-7 transition',
      variant === 'primary' &&
        'border-blue-700 bg-blue-700 text-gray-50 shadow hover:border-blue-800 hover:bg-blue-800 hover:shadow-lg disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-400 disabled:shadow-none',
      variant === 'secondary' &&
        'border-blue-700/50 bg-transparent text-blue-700 hover:border-blue-700 hover:bg-blue-50 disabled:border-gray-300 disabled:text-gray-400',
      variant === 'tertiary' &&
        'border-transparent bg-transparent text-blue-700 hover:border-blue-50 hover:bg-blue-50 disabled:border-gray-300 disabled:text-gray-400',
    ]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
