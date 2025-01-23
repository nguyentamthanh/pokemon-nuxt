<template>
  <div
    class="w-full h-screen absolute z-[2] flex items-center justify-center flex-col bg-primary_dark text-secondary_light left-0 top-0"
  >
    <h1 class="text-7xl uppercase">POKEMON MEMORIES</h1>
    <p class="text-[2rem]">Select mode to start game</p>
    <div class="flex mt-8">
      <button
        v-for="mode in arrSelected"
        :key="mode.id"
        class="w-[150px] h-[150px] shadow-none border border-secondary_light text-secondary_light flex flex-col items-center justify-center cursor-pointer transition-colors duration-[0.3s] ease-[ease-in-out] mx-4 my-0 rounded-2xl border-solid hover:bg-secondary_light hover:text-primary_dark font-primary bg-transparent"
        @click="onStart(mode.value)"
      >
        <span class="text-[2rem]">{{ mode.name }}</span>
        <span class="block text-xl mt-2">{{ mode.mode }}</span>
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
function onStart(totalOfBlocks) {
  settings.value.totalOfBlocks = totalOfBlocks;
  const firstCards = Array.from({ length: totalOfBlocks / 2 }, (_, i) => i + 1);
  const cards = [...firstCards, ...firstCards];
  settings.value.cardsContext = useUtils(cards).map((card) => ({
    id: card,
    isFlipped: false,
  }));
  settings.value.startedAt = Date.now();
  console.log("🚀 ~ onStart ~ settings:", settings.value);
  statusMatch.value = statusSettings.MATCH;
}
</script>
