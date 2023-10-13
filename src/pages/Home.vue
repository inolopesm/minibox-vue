<script setup lang="ts">
import { useRouter } from "vue-router";
import type { GlobalState } from "../App.vue";
import Button from "../components/Button.vue";
import Header from "../components/Header.vue";
import Layout from "../components/Layout.vue";
import { inject } from "../utils";
import { onMounted } from "vue";

const globalState = inject<GlobalState>("globalState");

const router = useRouter();

onMounted(() => !globalState.accessToken && router.push("/entrar"));

function handleLogout() {
  globalState.accessToken = "";
  router.push("/entrar");
}

function goToMenu() {
  router.push("/cardapio");
}
</script>

<template>
  <Layout>
    <Header></Header>
    <div class="flex flex-grow flex-col justify-center px-6 py-12">
      <div class="flex flex-col gap-2">
        <Button @click="goToMenu">Cardápio</Button>
        <Button>Fiados</Button>
        <Button variant="secondary" @click="handleLogout">Sair</Button>
      </div>
    </div>
  </Layout>
</template>
