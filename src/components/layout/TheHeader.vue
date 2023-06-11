<script setup>
import LogoIcon from "@/components/icons/LogoIcon.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import LoginModal from "../auth/LoginModal.vue";
import MenuIcon from "../icons/MenuIcon.vue";

const authStore = useAuthStore();

const isLoginOpen = ref(false);
</script>

<template>
  <header class="flex w-full items-center justify-between py-10 text-[#d8f5e4]">
    <RouterLink :to="{ name: 'home' }">
      <LogoIcon class="h-16 w-16" />
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
        @click="isLoginOpen = true"
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

    <button class="text-gray-900 md:hidden">
      <MenuIcon class="h-8 w-8" />
    </button>
  </header>

  <LoginModal :open="isLoginOpen" @close="isLoginOpen = false" />
</template>

<style scoped lang="postcss">
.router-link-active {
  @apply border-pink-600 text-pink-500;
}
</style>
