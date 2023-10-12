<script setup lang="ts">
defineProps<{ variant: "h6" }>();
</script>

<template>
  <div :class="[variant === 'h6' && 'text-xl font-medium']">
    <slot></slot>
  </div>
</template>
