<template>
  <div
    class="w-full h-screen absolute top-0 left-0 z-2 flex items-center justify-center flex-col bg-dark text-light"
  >
    <h1 class="text-4xl uppercase">POKE MEMORIES</h1>
    <p class="text-xl">Select mode to start game</p>
    <div class="flex mt-8">
      <button
        v-for="mode in arrSelected"
        :key="mode.id"
        class="font-sans w-36 h-36 bg-transparent shadow-none border border-light text-light flex flex-col rounded-lg mx-4 items-center justify-center cursor-pointer transition ease-in-out duration-300 hover:(bg-light text-dark)"
        @click="onStart(mode.value)"
      >
        <span class="text-2xl">{{ mode.name }}</span>
        <span class="block text-lg mt-2">{{ mode.mode }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const settings = defineModel("settings", {
  type: Object,
  required: true,
});
const statusMatch = defineModel("statusMatch", {
  type: String,
  required: true,
});
console.log("🚀 ~ settings:", settings.value);
const arrSelected = ref([
  {
    id: 1,
    name: "4x4",
    mode: "Easy",
    value: 16,
  },
  {
    id: 2,
    name: "6x6",
    mode: "Normal",
    value: 36,
  },
  {
    id: 3,
    name: "8x8",
    mode: "Hard",
    value: 64,
  },
  {
    id: 4,
    name: "10x10",
    mode: "Super Hard",
    value: 100,
  },
]);
const emit = defineEmits(["onStart"]);
function onStart(totalOfBlocks) {
  settings.value.totalOfBlocks = totalOfBlocks;
  const firstCards = Array.from({ length: totalOfBlocks / 2 }, (_, i) => i + 1);
  const cards = [...firstCards, ...firstCards];
  settings.value.cardsContext = useUtils(cards);
  settings.value.startedAt = Date.now();
  statusMatch.value = statusSettings.MATCH;
}
</script>
