<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import type { GlobalState } from "../App.vue";
import TextField from "../components/TextField.vue";
import Typography from "../components/Typography.vue";
import Button from "../components/Button.vue";
import Alert from "../components/Alert.vue";
import api from "../services/api";
import { inject } from "../utils";

const globalState = inject<GlobalState>("globalState");

const router = useRouter();

const state = reactive({
  error: "",
  loading: false,
  data: { username: "", password: "" },
});

async function handleSubmit(): Promise<void> {
  state.loading = true;

  try {
    const response = await api.post<{ accessToken: string }>(
      "/sessions",
      state.data
    );

    globalState.accessToken = response.data.accessToken;

    router.push("/");
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}
</script>

<template>
  <div class="flex min-h-screen flex-col justify-center bg-gray-50">
    <div class="px-6 py-10">
      <div class="mb-10">
        <Typography variant="h6">Entre no Minibox</Typography>
      </div>
      <div class="flex flex-col gap-6">
        <Alert variant="error" v-if="state.error">{{ state.error }}</Alert>
        <TextField
          type="text"
          label="Usuário"
          :value="state.data.username"
          @update:value="(value) => (state.data.username = value)"
          :disabled="state.loading"
        />
        <TextField
          type="password"
          label="Senha"
          :value="state.data.password"
          @update:value="(value) => (state.data.password = value)"
          :disabled="state.loading"
        />
        <Button @click="handleSubmit" :disabled="state.loading">Entrar</Button>
      </div>
    </div>
  </div>
</template>
