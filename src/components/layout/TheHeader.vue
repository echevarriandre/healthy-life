<script setup>
import LogoIcon from "@/components/icons/LogoIcon.vue";
import { RouterLink } from "vue-router";
import MenuIcon from "../icons/MenuIcon.vue";
</script>

<template>
  <header class="flex w-full items-center justify-between py-10 text-[#d8f5e4]">
    <RouterLink :to="{ name: 'home' }">
      <LogoIcon class="h-16 w-16" />
    </RouterLink>

    <nav class="hidden md:flex md:gap-12 lg:gap-16">
      <RouterLink
        :to="{ name: 'advice' }"
        class="border-b-2 uppercase text-gray-900 transition-all duration-200 hover:text-pink-500"
        >Dicas</RouterLink
      >
      <RouterLink
        :to="{ name: 'schedule' }"
        class="border-b-2 uppercase text-gray-900 transition-all duration-200 hover:text-pink-500"
        >Agenda</RouterLink
      >
      <button class="border-b-2 uppercase text-gray-900 transition-all duration-200 hover:text-pink-500">Equipa</button>
      <button class="border-b-2 uppercase text-gray-900 transition-all duration-200 hover:text-pink-500">
        Propósito
      </button>
      <button class="border-b-2 uppercase text-gray-900 transition-all duration-200 hover:text-pink-500">FAQ</button>
    </nav>

    <button class="text-gray-900 md:hidden">
      <MenuIcon class="h-8 w-8" />
    </button>
  </header>
</template>

<style scoped lang="postcss">
.router-link-active {
  @apply border-pink-600 text-pink-500;
}
</style>
