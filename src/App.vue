<script setup>
import Header from "@/components/layout/TheHeader.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Header />

  <RouterView v-slot="{ Component, route }">
    <Transition mode="out-in" name="fade">
      <div :key="route.name">
        <component :is="Component" />
      </div>
    </Transition>
  </RouterView>
</template>
