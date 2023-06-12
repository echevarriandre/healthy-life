<script setup>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import HealthyFoodAdvice from "../components/advices/HealthyFoodAdvice.vue";
import RelaxingAdvice from "../components/advices/RelaxingAdvice.vue";
import SleepAdvice from "../components/advices/SleepAdvice.vue";
import StudyAdvice from "../components/advices/StudyAdvice.vue";
import FoodIcon from "../components/icons/FoodIcon.vue";
import SleepIcon from "../components/icons/SleepIcon.vue";
import StudyIcon from "../components/icons/StudyIcon.vue";
import YogaIcon from "../components/icons/YogaIcon.vue";
</script>

<template>
  <main class="flex flex-col gap-20 pb-20">
    <section class="flex flex-col gap-10">
      <h1 class="text-center text-5xl font-bold text-pink-500">Dicas</h1>
      <div class="rounded-lg bg-white p-8">
        Infelizmente o stress e a ansiedade podem provocar alguns problemas físicos para além de afetar a saúde mental,
        tal como provocar tensão muscular, queda de cabelo, tonturas ou dores de cabeça frequentes e pode-se manifestar
        em todas as pessoas seja qual for a sua idade. Para prevenir estes sintomas ou prevenir que eles se manifestem é
        importante ter em conta algumas dicas. O nosso objetivo é conseguir reunir dicas e sugerir tudo o que for mais
        natural possível, sendo que não queremos de maneira alguma menosprezar o poder terapêutico que os medicamentos
        têm e que, em certos casos, são o caminho inicial necessário.
      </div>
    </section>
    <TabGroup>
      <TabList class="flex w-full flex-col items-center justify-between gap-2 rounded-lg bg-pink-200 p-2 md:flex-row">
        <Tab v-slot="{ selected }" as="template">
          <button
            :class="{ 'bg-white': selected, 'hover:bg-pink-100': !selected }"
            class="flex w-full justify-center rounded-lg px-8 py-4 transition duration-200 focus-visible:outline-0 md:w-52"
          >
            <div class="flex w-32 gap-3 md:w-full md:justify-center">
              <YogaIcon class="h-6 w-6 shrink-0" />
              <span>Relaxamento</span>
            </div>
          </button>
        </Tab>
        <Tab v-slot="{ selected }" as="template">
          <button
            :class="{ 'bg-white': selected, 'hover:bg-pink-100': !selected }"
            class="flex w-full justify-center rounded-lg px-8 py-4 transition duration-200 focus-visible:outline-0 md:w-52"
          >
            <div class="flex w-32 gap-3 md:w-full md:justify-center">
              <SleepIcon class="h-6 w-6 shrink-0" />
              <span>Dormir</span>
            </div>
          </button>
        </Tab>
        <Tab v-slot="{ selected }" as="template">
          <button
            :class="{ 'bg-white': selected, 'hover:bg-pink-100': !selected }"
            class="flex w-full justify-center rounded-lg px-8 py-4 transition duration-200 focus-visible:outline-0 md:w-52"
          >
            <div class="flex w-32 gap-3 md:w-full md:justify-center">
              <StudyIcon class="h-6 w-6 shrink-0" />
              <span>Estudar</span>
            </div>
          </button>
        </Tab>
        <Tab v-slot="{ selected }" as="template">
          <button
            :class="{ 'bg-white': selected, 'hover:bg-pink-100': !selected }"
            class="flex w-full justify-center rounded-lg px-8 py-4 transition duration-200 focus-visible:outline-0 md:w-52"
          >
            <div class="flex w-32 gap-3 md:w-full md:justify-center">
              <FoodIcon class="h-5 w-5 shrink-0" />
              <span>Alimentação</span>
            </div>
          </button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel><RelaxingAdvice /></TabPanel>
        <TabPanel><SleepAdvice /></TabPanel>
        <TabPanel><StudyAdvice /></TabPanel>
        <TabPanel><HealthyFoodAdvice /></TabPanel>
      </TabPanels>
    </TabGroup>
  </main>
</template>
