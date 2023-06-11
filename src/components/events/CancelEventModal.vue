<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionRoot } from "@headlessui/vue";
import SpinnerIcon from "../icons/SpinnerIcon.vue";

const props = defineProps(["open", "cancelling"]);
const emit = defineEmits(["close", "cancelEvent"]);

function cancelEvent() {
  emit("cancelEvent");
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
          <DialogTitle class="text-lg font-medium leading-6 text-gray-900"
            >Tem a certeza que quer cancelar?</DialogTitle
          >

          <div class="mt-5 flex gap-4">
            <button
              class="inline-flex justify-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 transition duration-200 hover:bg-pink-200"
              @click="cancelEvent"
            >
              <span v-if="!cancelling">Sim</span>
              <SpinnerIcon v-else class="h-6 w-6 text-pink-500" />
            </button>
            <button class="hover:underline" @click="close">Não</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
