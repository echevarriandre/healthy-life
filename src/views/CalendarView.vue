<script setup>
// eslint-disable-next-line no-undef
// Calendly.initInlineWidget({
//   url: "https://calendly.com/broccolis",
//   parentElement: document.getElementById("calendly-embed"),
//   prefill: {},
//   utm: {},
// });

import { onMounted } from "vue";

// console.log("asdasd");
onMounted(() => {
  // console.log("mounted");
  // const calendlyScript = document.createElement("script");
  // calendlyScript.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
  // calendlyScript.setAttribute("id", "calendly-script");
  // document.head.appendChild(calendlyScript);

  // eslint-disable-next-line no-undef
  Calendly.initInlineWidget({
    url: "https://calendly.com/broccolis",
    parentElement: document.getElementById("calendly-embed"),
    prefill: {},
    utm: {},
  });
});

// onUnmounted(() => {
//   console.log("unmounted");
//   const script = document.getElementById("calendly-script");
//   script.remove();
// });
</script>

<template>
  <div id="calendly-embed"></div>
</template>

<style lang="postcss">
#calendly-embed {
  @apply h-[650px] min-w-[320px] md:h-[720px];
  background: url(@/assets/loader.svg) center 40% no-repeat;
  background-size: 20% 20%;
}
</style>
