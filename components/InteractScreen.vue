<template>
  <div
    class="w-full h-screen absolute z-[2] bg-primary_dark text-secondary_light left-0 top-0"
  >
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
      <Card
        v-for="(card, index) in cardsContext"
        :key="index"
        :ref="`card-${index}`"
        :imgBackFaceUrl="`/images/${card}.png`"
        :card="{ index, value: card }"
        v-model:cardsContext="cardsContext"
      />
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";
const cardsContext = defineModel("cardsContext", {
  type: Array,
  required: true,
});
</script>
