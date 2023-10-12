<script setup lang="ts">
import { useRouter } from "vue-router";
import type { GlobalState } from "../App.vue";
import Button from "../components/Button.vue";
import Typography from "../components/Typography.vue";
import { inject } from "../utils";
import { onMounted } from "vue";

const globalState = inject<GlobalState>("globalState");

const router = useRouter();

onMounted(() => {
  if (!globalState.accessToken) {
    router.push("/entrar");
  }
});

function handleLogout() {
  globalState.accessToken = "";
  router.push("/entrar");
}
</script>

<template>
  <div class="flex min-h-screen flex-col justify-center bg-gray-50">
    <div class="px-6 py-10">
      <div class="mb-10 flex justify-center">
        <Typography variant="h6">Minibox</Typography>
      </div>
      <div class="flex flex-col gap-2">
        <Button>Cardápio</Button>
        <Button>Fiados</Button>
        <Button @click="handleLogout">Sair</Button>
      </div>
    </div>
  </div>
</template>
