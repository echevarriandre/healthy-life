<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SpinnerIcon from "../components/icons/SpinnerIcon.vue";
import TInput from "../components/layout/t-input.vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
const router = useRouter();

const isLogin = ref(false);

const username = ref("");
const password = ref("");
const error = ref(false);

function login() {
  isLogin.value = true;
  error.value = false;
  authStore
    .login(username.value, password.value)
    .then(() => {
      isLogin.value = false;
      close();
    })
    .catch(() => {
      username.value = "";
      password.value = "";
      error.value = true;
      isLogin.value = false;
    });
}

function close() {
  router.push({ path: "/" });
}
</script>

<template>
  <div class="flex w-full justify-center">
    <form @submit="login" class="mt-5 flex w-full max-w-md flex-col items-center gap-12">
      <div class="flex w-full flex-col gap-4">
        <TInput v-model:modelValue="username" label="Nome de utilizador" type="text" :disabled="isLogin" />

        <div>
          <TInput v-model:modelValue="password" label="Password" type="password" :disabled="isLogin" />
          <p v-if="error" class="mt-4 text-red-400">Nome ou password incorreta</p>
        </div>
      </div>

      <button
        @click.prevent="login"
        type="submit"
        class="flex w-full justify-center rounded-lg bg-pink-400 px-4 py-2 text-white transition duration-200 hover:bg-pink-500"
      >
        <span v-if="!isLogin">Entrar</span>
        <SpinnerIcon v-else class="h-6 w-6" />
      </button>
    </form>
  </div>
</template>
