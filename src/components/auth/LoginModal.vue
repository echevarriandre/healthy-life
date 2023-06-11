<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionRoot } from "@headlessui/vue";
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import SpinnerIcon from "../icons/SpinnerIcon.vue";
import TInput from "../layout/t-input.vue";

const props = defineProps(["open"]);
const emit = defineEmits(["close"]);
const authStore = useAuthStore();

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
  emit("close");
}
</script>

<template>
  <TransitionRoot
    :show="props.open"
    as="template"
    enter="transition-opacity duration-100"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <Dialog @close="close" class="relative z-50">
      <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel class="w-full max-w-md rounded-lg bg-white p-6 shadow">
          <DialogTitle class="text-lg font-medium leading-6 text-gray-900">Login</DialogTitle>

          <form @submit="login">
            <div class="mt-5 flex flex-col gap-12">
              <div class="flex flex-col gap-4">
                <TInput v-model:modelValue="username" label="Nome de utilizador" type="text" :disabled="isLogin" />

                <div>
                  <TInput v-model:modelValue="password" label="Password" type="password" :disabled="isLogin" />
                  <p v-if="error" class="mt-4 text-red-400">Nome ou Password incorreta</p>
                </div>
              </div>

              <button
                @click.prevent="login"
                type="submit"
                class="flex justify-center rounded-lg bg-pink-400 px-4 py-2 text-white transition duration-200 hover:bg-pink-500"
              >
                <span v-if="!isLogin">Entrar</span>
                <SpinnerIcon v-else class="h-6 w-6" />
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
