<script setup>
import { useScrollLock } from "@vueuse/core";
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import LoginModal from "../auth/LoginModal.vue";
import MenuIcon from "../icons/MenuIcon.vue";
import MobileMenu from "./MobileMenu.vue";

const route = useRoute();
const authStore = useAuthStore();
const scrollLock = useScrollLock(document.documentElement);
const scrollLockBody = useScrollLock(document.body);

const isLoginOpen = ref(false);
const isMenuOpen = ref(false);

function handleMenu() {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    scrollLock.value = false;
    scrollLockBody.value = false;
    return;
  }

  isMenuOpen.value = true;
  scrollLock.value = true;
  scrollLockBody.value = true;
}

function handleLogin() {
  if (route.name === "login") return;
  isLoginOpen.value = true;
}
</script>

<template>
  <header class="flex w-full items-center justify-between py-10 text-[#d8f5e4]">
    <RouterLink :to="{ name: 'home' }">
      <img src="../../assets/logo.png" class="h-24 w-24" alt="logo" />
    </RouterLink>

    <nav class="hidden md:flex md:gap-12 lg:gap-16">
      <RouterLink
        v-if="authStore.user"
        :to="{ name: 'events' }"
        class="border-b-2 uppercase text-gray-900 transition-all duration-200 hover:text-pink-500"
      >
        Eventos
      </RouterLink>
      <RouterLink
        :to="{ name: 'advice' }"
        class="border-b-2 uppercase text-gray-900 transition-all duration-200 hover:text-pink-500"
      >
        Dicas
      </RouterLink>
      <RouterLink
        :to="{ name: 'schedule' }"
        class="border-b-2 uppercase text-gray-900 transition-all duration-200 hover:text-pink-500"
      >
        Agenda
      </RouterLink>
      <button
        v-if="!authStore.user"
        @click="handleLogin"
        class="border-b-2 uppercase text-gray-900 transition-all duration-200 hover:text-pink-500"
      >
        Login
      </button>
      <button
        v-else
        @click="authStore.logout"
        class="border-b-2 uppercase text-gray-900 transition-all duration-200 hover:text-pink-500"
      >
        Logout
      </button>
    </nav>

    <button @click="handleMenu" class="text-gray-900 md:hidden">
      <MenuIcon class="h-8 w-8" />
    </button>
  </header>

  <LoginModal :open="isLoginOpen" @close="isLoginOpen = false" />

  <MobileMenu :open="isMenuOpen" @close="handleMenu" />
</template>

<style scoped lang="postcss">
.router-link-active {
  @apply border-pink-600 text-pink-500;
}
</style>
