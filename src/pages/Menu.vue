<script setup lang="ts">
import { WatchCallback, onMounted, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import debouce from "lodash/debounce";
import type { GlobalState } from "../App.vue";
import Header from "../components/Header.vue";
import Layout from "../components/Layout.vue";
import Link from "../components/Link.vue";
import TextField from "../components/TextField.vue";
import { formatMoney, inject } from "../utils";
import api from "../services/api";

const globalState = inject<GlobalState>("globalState");

const router = useRouter();

const state = reactive({
  error: "",
  loading: true,
  name: "",
  products: new Array<{ id: number; name: string; value: number }>(),
});

onMounted(() => !globalState.accessToken && router.push("/entrar"));

onMounted(() =>
  api("/products", { headers: { "x-access-token": globalState.accessToken } })
    .then((response) => (state.products = response.data))
    .catch((error) => (state.error = error))
    .finally(() => (state.loading = false))
);

watch(
  () => state.name,
  debouce<WatchCallback<string, string>>((name) => {
    state.loading = true;

    api("/products", {
      headers: { "x-access-token": globalState.accessToken },
      params: { name },
    })
      .then((response) => (state.products = response.data))
      .catch((error) => (state.error = error))
      .finally(() => (state.loading = false));
  }, 500)
);

function goToEditProductPage(productId: number): void {
  router.push(`/cardapio/${productId}/editar`);
}
</script>

<template>
  <Layout>
    <Header goBackTo="/"></Header>
    <div class="flex-grow px-6 py-12">
      <div class="mb-6">
        <TextField
          type="text"
          label="Busca"
          :value="state.name"
          @update:value="(value) => (state.name = value)"
          :disabled="state.loading"
          placeholder="Cuscuz com Ovo"
        />
      </div>
      <div class="flex h-full items-center justify-center">
        <div v-if="state.loading">Carregando...</div>
        <div v-else-if="state.products.length === 0">
          Nenhum produto encontrado
        </div>
      </div>
      <table class="text-sm" v-if="state.products.length > 0">
        <thead>
          <tr>
            <th class="p-4">Nome</th>
            <th class="p-4">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in state.products">
            <td class="border-t border-t-gray-200 p-4">
              <Link @click="goToEditProductPage(product.id)">
                {{ product.name }}
              </Link>
            </td>
            <td class="border-t border-t-gray-200 p-4">
              {{ formatMoney(product.value) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
</template>
