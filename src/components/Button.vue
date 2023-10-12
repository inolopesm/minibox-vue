<script setup lang="ts">
withDefaults(
  defineProps<{ variant?: "primary" | "secondary" | "tertiary" }>(),
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
        'border-blue-700 bg-blue-700 text-gray-50 shadow hover:border-blue-800 hover:bg-blue-800 hover:shadow-lg',
      variant === 'secondary' &&
        'border-blue-700/50 bg-transparent text-blue-700 hover:border-blue-700 hover:bg-blue-50',
      variant === 'tertiary' &&
        'border-transparent bg-transparent text-blue-700 hover:border-blue-50 hover:bg-blue-50',
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
