<script setup lang="ts">
import { provide, reactive, watch } from "vue";
import Cookies from "js-cookie";

export interface GlobalState {
  accessToken: string;
}

const globalState = reactive<GlobalState>(
  JSON.parse(Cookies.get("minibox") ?? "null") ?? { accessToken: "" }
);

watch(globalState, (state) =>
  Cookies.set("minibox", JSON.stringify(state), {
    path: "/",
    secure: window.location.protocol === "https:",
    sameSite: "strict",
  })
);

provide("globalState", globalState);
</script>

<template>
  <router-view />
</template>
