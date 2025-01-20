<template>
  <div
    class="w-full h-screen absolute top-0 left-0 z-2 flex items-center justify-center flex-col bg-dark text-light"
  >
    <h1 class="text-5xl">✨ Congratulations ✨</h1>
    <h3 class="mt-6 text-3xl">{{ Math.round(timer / 1000) }} seconds</h3>
    <button
      class="font-sans bg-transparent shadow-none border border-light text-light my-4 py-4 px-5 rounded-md text-lg cursor-pointer transition ease-in-out duration-300 hover:(bg-light text-dark)"
      @click="onStartAgain"
    >
      Start Again
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  timer: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["onStartAgain"]);
function onStartAgain() {
  emit("onStartAgain");
}
</script>
