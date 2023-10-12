<script setup lang="ts">
import { provide, reactive } from "vue";

export interface GlobalState {
  accessToken: string;
}

const globalState = reactive<GlobalState>({ accessToken: "" });

provide("globalState", globalState);
</script>

<template>
  <router-view />
</template>
