import { defineStore } from "pinia";
import { ref } from "vue";
import CalendlyService from "../services/calendly-service";

export const useCalendlyStore = defineStore("calendly", () => {
  const events = ref([]);
  const fetching = ref(false);
  const token = ref(null);

  function setToken(t) {
    token.value = t;
  }

  function getEvents() {
    fetching.value = true;
    events.value = [];
    CalendlyService.getEvents().then((response) => {
      events.value = response.data;
      fetching.value = false;
    });
  }

  return { fetching, events, getEvents, token, setToken };
});
