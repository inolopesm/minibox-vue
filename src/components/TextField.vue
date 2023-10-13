<script setup lang="ts">
defineProps<{
  label: string;
  value: string;
  type: "text" | "password";
  disabled?: boolean;
  placeholder?: string;
}>();

defineEmits<{ (event: "update:value", value: string): void }>();
</script>

<template>
  <div>
    <div :class="['mb-2', disabled && 'text-gray-300']">{{ label }}</div>
    <input
      :type="type"
      class="block w-full rounded border-2 border-gray-300 bg-white px-3 py-4 transition focus:border-blue-700 focus:outline-none disabled:text-gray-300"
      :value="value"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      :disabled="disabled"
      :placeholder="placeholder"
    />
  </div>
</template>
