<template>
  <div class="w-full h-screen absolute top-0 left-0 z-2 bg-dark text-light">
    <div
      class="flex flex-wrap mx-auto my-8"
      :style="{
        width: `$${
          ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 +
            16) *
          Math.sqrt(cardsContext.length)
        }px`,
      }"
    >
      <card-flip
        v-for="(card, index) in cardsContext"
        :key="index"
        :ref="`card-${index}`"
        :imgBackFaceUrl="`@/assets/images/${card}.png`"
        :card="{ index, value: card }"
        :cardsContext="cardsContext"
        @onFlip="checkRule($event)"
      />
    </div>
  </div>
</template>

<script setup>
import CardFlip from "./Card.vue";
const cardsContext = ref([]);
const rules = ref([]);
function checkRule(card) {
  if (rules.value.length === 2) return false;
  rules.value.push(card);
  if (
    rules.value.length === 2 &&
    rules.value[0].value === rules.value[1].value
  ) {
    const firstCardRef = rules.value[0].index;
    const secondCardRef = rules.value[1].index;
    if (firstCardRef !== undefined && secondCardRef !== undefined) {
      const firstCard = cardsContext.value[firstCardRef];
      const secondCard = cardsContext.value[secondCardRef];
      firstCard.onEnabledDisableMode();
      secondCard.onEnabledDisableMode();
    }
    rules.value = [];
    const disabledElements = document.querySelectorAll(
      ".screen .card.disabled"
    );
    if (
      disabledElements &&
      disabledElements.length === cardsContext.value.length - 2
    ) {
      setTimeout(() => {
        console.log("Complete All Events API requests");
      }, 920);
    }
  }
  return;
}
</script>
