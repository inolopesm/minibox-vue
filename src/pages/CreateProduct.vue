<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import type { GlobalState } from "../App.vue";
import Header from "../components/Header.vue";
import Layout from "../components/Layout.vue";
import TextField from "../components/TextField.vue";
import Button from "../components/Button.vue";
import { inject } from "../utils";
import api from "../services/api";
import Alert from "../components/Alert.vue";

const globalState = inject<GlobalState>("globalState");

const router = useRouter();

const state = reactive({
  error: "",
  loading: false,
  name: "",
  data: { name: "", value: "" },
});

onMounted(() => !globalState.accessToken && router.push("/entrar"));

async function handleSubmit(): Promise<void> {
  const data = { ...state.data, value: Number.parseInt(state.data.value, 10) };
  state.loading = true;

  try {
    const headers = { "x-access-token": globalState.accessToken };
    await api.post("/products", data, { headers });
    router.push("/cardapio");
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}
</script>

<template>
  <Layout>
    <Header goBackTo="/cardapio"></Header>
    <div class="flex flex-grow flex-col gap-6 px-6 py-12">
      <Alert variant="error" v-if="state.error">{{ state.error }}</Alert>
      <TextField
        type="text"
        label="Nome"
        :value="state.data.name"
        @update:value="(value) => (state.data.name = value)"
        :disabled="state.loading"
        placeholder="Cuscuz com Ovo"
      />
      <TextField
        type="number"
        label="Valor em centavos"
        :value="state.data.value"
        @update:value="(value) => (state.data.value = value)"
        :disabled="state.loading"
        inputmode="numeric"
        placeholder="500"
      />
      <Button @click="handleSubmit" :disabled="state.loading">Criar</Button>
    </div>
  </Layout>
</template>
