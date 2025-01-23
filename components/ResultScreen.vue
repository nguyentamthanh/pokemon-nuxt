<template>
  <div
    class="w-full h-screen absolute z-[2] bg-primary_dark text-secondary_light flex items-center justify-center flex-col left-0 top-0"
  >
    <h1 class="text-[5rem]">✨ Congratulations ✨</h1>
    <h3 class="text-5xl mt-6">{{ Math.round(timer / 1000) }} seconds</h3>
    <button
      class="shadow-none border border-secondary_light text-secondary_light text-xl cursor-pointer transition-colors duration-[0.3s] ease-in-out m-4 px-5 py-4 rounded-lg border-solid hover:bg-secondary_light hover:text-primary_dark font-primary"
      @click="onStartAgain"
    >
      Start Again
    </button>
  </div>
</template>

<script setup>
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
