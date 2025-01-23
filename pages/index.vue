<template>
  <MainScreen
    v-if="statusMatch === statusSettings.DEFAULT"
    v-model:settings="settings"
    v-model:statusMatch="statusMatch"
  />
  <InteractScreen
    v-if="statusMatch === statusSettings.MATCH"
    v-model:cardsContext="settings.cardsContext"
    @onFinish="onGetResult"
  />
  <ResultScreen
    v-if="statusMatch === statusSettings.RESULT"
    :timer="timer"
    @onStartAgain="statusMatch = statusSettings.DEFAULT"
  />
  <!-- <CopyRight /> -->
</template>

<script setup>
import MainScreen from "@/components/MainScreen.vue";
import InteractScreen from "@/components/InteractScreen.vue";
import ResultScreen from "@/components/ResultScreen.vue";
import CopyRight from "@/components/CopyRight.vue";

const statusMatch = ref(statusSettings.MATCH);
const timer = ref(0);
// const settings = ref({
//   totalOfBlocks: 0,
//   cardsContext: [],
//   startedAt: null,
// });
const settings = ref({
  totalOfBlocks: 16,
  cardsContext: [
    {
      id: 7,
      isFlipped: false,
    },
    {
      id: 8,
      isFlipped: false,
    },
    {
      id: 2,
      isFlipped: false,
    },
    {
      id: 1,
      isFlipped: false,
    },
    {
      id: 2,
      isFlipped: false,
    },
    {
      id: 1,
      isFlipped: false,
    },
    {
      id: 7,
      isFlipped: false,
    },
    {
      id: 8,
      isFlipped: false,
    },
    {
      id: 5,
      isFlipped: false,
    },
    {
      id: 4,
      isFlipped: false,
    },
    {
      id: 3,
      isFlipped: false,
    },
    {
      id: 6,
      isFlipped: false,
    },
    {
      id: 5,
      isFlipped: false,
    },
    {
      id: 3,
      isFlipped: false,
    },
    {
      id: 4,
      isFlipped: false,
    },
    {
      id: 6,
      isFlipped: false,
    },
  ],
  startedAt: 1737623050351,
});
function onGetResult() {
  if (settings.value.startedAt) {
    timer.value = Date.now() - settings.value.startedAt;
    statusMatch.value = statusSettings.RESULT;
  }
}
</script>
