<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "./Button.vue";
import Typography from "./Typography.vue";

const props = withDefaults(
  defineProps<{ goBackTo?: string; loading?: boolean; right?: string }>(),
  { goBackTo: "", right: "" }
);

defineEmits<{ (event: "click:right"): void }>();

const router = useRouter();

function goBack() {
  router.push(props.goBackTo);
}
</script>

<template>
  <div class="flex h-16 items-center bg-gray-50 px-6 shadow-lg">
    <div class="w-1/3">
      <Button
        variant="tertiary"
        @click="goBack"
        v-if="goBackTo"
        :disabled="loading"
        >Voltar</Button
      >
    </div>
    <div class="flex w-1/3 justify-center">
      <Typography variant="h6">Minibox</Typography>
    </div>
    <div class="flex w-1/3 justify-end">
      <Button variant="tertiary" v-if="right" @click="$emit('click:right')">
        {{ right }}
      </Button>
    </div>
  </div>
</template>
