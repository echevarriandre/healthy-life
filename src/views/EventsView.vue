<script setup>
import EventItem from "../components/events/EventItem.vue";
import { useCalendlyStore } from "../stores/calendly";

const calendlyStore = useCalendlyStore();
calendlyStore.getEvents();
</script>

<template>
  <main class="mt-10">
    <section
      v-if="!calendlyStore.fetching && calendlyStore.events?.collection?.length > 0"
      class="flex flex-col gap-4 md:gap-8"
    >
      <EventItem v-for="event in calendlyStore.events.collection" :key="event.uri" :event="event" />
    </section>

    <section v-if="calendlyStore.fetching" class="flex flex-col gap-4 md:gap-8">
      <div class="h-[104px] w-full animate-pulse rounded-lg bg-gray-300" />
      <div class="h-[104px] w-full animate-pulse rounded-lg bg-gray-300" />
      <div class="h-[104px] w-full animate-pulse rounded-lg bg-gray-300" />
    </section>

    <p
      v-if="!calendlyStore.fetching && calendlyStore.events?.collection?.length === 0"
      class="mt-10 text-center text-2xl"
    >
      Não há eventos agendados
    </p>
  </main>
</template>
