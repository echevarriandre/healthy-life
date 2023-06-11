<script setup>
import MapIcon from "@/components/icons/MapIcon.vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";
import { format, isToday } from "date-fns";
import { ref } from "vue";
import CalendlyService from "../../services/calendly-service";
import { useCalendlyStore } from "../../stores/calendly";
import TrashIcon from "../icons/TrashIcon.vue";
import CancelEventModal from "./CancelEventModal.vue";

const props = defineProps(["event"]);
const calendlyStore = useCalendlyStore();

const startTime = new Date(props.event.start_time);
const endTime = new Date(props.event.end_time);
const today = isToday(startTime);

const cancelling = ref(false);
const isOpen = ref(false);

async function cancel() {
  const split = props.event.uri.split("/");
  cancelling.value = true;
  await CalendlyService.cancelEvent(split[split.length - 1]);
  CalendlyService.getEvents().then((response) => {
    calendlyStore.events = response.data;
    cancelling.value = false;
    isOpen.value = false;
  });
}

function openModal() {
  cancelling.value = false;
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
  cancelling.value = false;
}
</script>

<template>
  <div class="flex rounded-lg border-2 bg-white py-4 transition duration-300 hover:border-pink-500">
    <div class="flex flex-col items-center justify-center border-r px-6 text-slate-800 sm:px-8">
      <span class="text-lg capitalize">{{ format(startTime, "EEE") }}</span>
      <span class="text-4xl" :class="today && 'text-pink-500'">{{ format(startTime, "dd") }}</span>
    </div>

    <div class="flex flex-col justify-center px-6 py-1.5 text-slate-800 sm:px-8">
      <div class="flex items-center gap-2">
        <TimeIcon class="h-5 w-5 shrink-0 text-gray-400" />
        <span class="font-light">{{ format(startTime, "HH:mm") }} - {{ format(endTime, "HH:mm") }}</span>
      </div>
      <div class="flex items-center gap-2">
        <MapIcon class="h-5 w-5 shrink-0 text-gray-400" />
        <span class="font-light">{{ props.event.location.location }}</span>
      </div>
      <div class="block py-1.5 sm:hidden">
        {{ props.event.name }}
      </div>
    </div>

    <div class="hidden py-1.5 sm:block">
      {{ props.event.name }}
    </div>

    <div class="ml-auto mr-4 flex items-center text-red-400 sm:mr-8">
      <button class="pointer" @click="openModal" title="Cancelar">
        <TrashIcon class="h-6 w-6 transition duration-200 hover:text-red-500" />
      </button>
    </div>
  </div>

  <CancelEventModal :open="isOpen" :cancelling="cancelling" @cancelEvent="cancel" @close="closeModal" />
</template>
