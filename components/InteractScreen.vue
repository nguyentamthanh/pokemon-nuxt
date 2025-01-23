<template>
  <div
    class="w-full h-screen absolute z-[2] bg-primary_dark text-secondary_light left-0 top-0"
  >
    <div
      class="flex flex-wrap mx-auto my-8"
      :style="{
        width: `${
          ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 +
            16) *
          Math.sqrt(cardsContext.length)
        }px`,
      }"
    >
      <div
        v-for="(card, index) in cardsContext"
        :key="index"
        :ref="`card-${index}`"
      >
        <div
          class="inline-block mr-4 mb-4"
          :class="{ 'cursor-default': isDisabled }"
          :style="cardStyle"
        >
          <div
            class="w-full h-full transition-transform duration-[1s] cursor-pointer relative preserve-3d"
            :class="{ 'rotate-y-180': card?.isFlipped }"
            @click="onToggleFlipCard(card, index)"
          >
            <div
              class="absolute w-full h-full overflow-hidden shadow-[0_3px_10px_3px_rgba(0,0,0,0.2)] p-4 rounded-2xl backface-hidden"
            >
              <div
                class="h-full w-full bg-center bg-no-repeat bg-[url(/images/icon_back.png)]"
                :style="frontContentStyle"
              ></div>
            </div>
            <div
              class="absolute w-full h-full overflow-hidden shadow-[0_3px_10px_3px_rgba(0,0,0,0.2)] p-4 rounded-2xl bg-white backface-hidden rotate-y-180"
            >
              ">
              <div
                class="bg-contain bg-[center_center] bg-no-repeat h-full w-full"
                :style="{
                  backgroundImage: `url(${`/images/${card.id}.png`})`,
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cardsContext = defineModel("cardsContext", {
  type: Array,
  required: true,
});
const isDisabled = ref(false);
const isFlipped = ref(false);
const rules = ref([]);
const cardStyle = computed(() => {
  const size = (920 - 16 * 4) / Math.sqrt(cardsContext.value.length) - 16;
  const width = (size * 3) / 4;
  const perspective = width * 2;
  return {
    height: `${size}px`,
    width: `${width}px`,
    perspective: `${perspective}px`,
  };
});
const frontContentStyle = computed(() => {
  const size =
    (((920 - 16 * 4) / Math.sqrt(cardsContext.value.length) - 16) * 3) / 4 / 3;
  return {
    backgroundSize: `${size}px ${size}px`,
  };
});

function onToggleFlipCard(card, index) {
  card.isFlipped = !card.isFlipped;
  if (card.isFlipped) checkRule(card?.id, index);
}
function onFlipBackCard() {
  isFlipped.value = false;
}
function onEnabledDisableMode() {
  isDisabled.value = true;
}
function checkRule(card, index) {
  rules.value.push({ card, index });
  console.log("🚀 ~ checkRule ~ rules:", rules.value);
  if (rules.value.length === 2) {
    if (rules.value[0].card === rules.value[1].card) {
      console.log("Matched");
      setTimeout(() => {
        cardsContext.value = cardsContext.value.filter(
          (item) =>
            item.id !== rules.value[0].card && item.id !== rules.value[1].card
        );
        console.log("🚀 ~ checkRule ~ cardsContext.value:", cardsContext.value);
        rules.value = [];
      }, 2000);
    } else {
      console.log("Not Matched");
    }
  }
  // if (rules.value.length === 2) return false;
  // rules.value.push(card);
  // if (
  //   rules.value.length === 2 &&
  //   rules.value[0].value === rules.value[1].value
  // ) {
  //   const firstCardRef = rules.value[0].index;
  //   const secondCardRef = rules.value[1].index;
  //   if (firstCardRef !== undefined && secondCardRef !== undefined) {
  //     const firstCard = cardsContext.value[firstCardRef];
  //     const secondCard = cardsContext.value[secondCardRef];
  //     firstCard.onEnabledDisableMode();
  //     secondCard.onEnabledDisableMode();
  //   }
  //   rules.value = [];
  //   const disabledElements = document.querySelectorAll(
  //     ".screen .card.disabled"
  //   );
  //   if (
  //     disabledElements &&
  //     disabledElements.length === cardsContext.value.length - 2
  //   ) {
  //     setTimeout(() => {
  //       console.log("Complete All Events API requests");
  //     }, 920);
  //   }
  // }
  // return;
}
</script>
