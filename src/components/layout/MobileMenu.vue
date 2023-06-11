<script setup>
import { TransitionRoot } from "@headlessui/vue";
import { RouterLink } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import LeftIcon from "../icons/LeftArrowIcon.vue";

const props = defineProps(["open"]);
const emit = defineEmits(["close"]);

const authStore = useAuthStore();

function logout() {
  authStore.logout();
  closeMenu();
}

function closeMenu() {
  emit("close");
}
</script>

<template>
  <TransitionRoot
    :show="props.open"
    as="template"
    enter="duration-200 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div class="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center bg-[#dcd6d1] md:hidden">
      <button class="relative top-12 flex items-center gap-2 uppercase text-[#452712]" @click="emit('close')">
        <LeftIcon class="h-3 w-3" />
        <span>voltar</span>
      </button>
      <nav class="relative top-48 flex w-full flex-col gap-12 p-12">
        <RouterLink
          v-if="authStore.user"
          :to="{ name: 'events' }"
          @click="closeMenu"
          class="relative text-4xl uppercase text-[#452712] transition-all duration-200 hover:text-pink-500"
        >
          Eventos
        </RouterLink>
        <RouterLink
          :to="{ name: 'advice' }"
          @click="closeMenu"
          class="relative text-4xl uppercase text-[#452712] transition-all duration-200 hover:text-pink-500"
        >
          Dicas
        </RouterLink>
        <RouterLink
          :to="{ name: 'schedule' }"
          @click="closeMenu"
          class="relative text-4xl uppercase text-[#452712] transition-all duration-200 hover:text-pink-500"
        >
          Agenda
        </RouterLink>
        <RouterLink
          v-if="!authStore.user"
          :to="{ name: 'login' }"
          @click="closeMenu"
          class="relative w-fit text-4xl uppercase text-[#452712] transition-all duration-200 hover:text-pink-500"
        >
          Login
        </RouterLink>
        <button
          v-else
          @click="logout"
          class="relative w-fit text-4xl uppercase text-[#452712] transition-all duration-200 hover:text-pink-500"
        >
          Logout
        </button>
      </nav>
    </div>
  </TransitionRoot>
</template>
