<template>
  <div
    class="inline-block mr-4 mb-4"
    :class="{ 'cursor-default': isDisabled }"
    :style="cardStyle"
  >
    <div
      class="w-full h-full transition-transform duration-[1s] cursor-pointer relative preserve-3d"
      :class="{ 'rotate-y-180': isFlipped }"
      @click="onToggleFlipCard"
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
          :style="backContentStyle"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  card: {
    type: [String, Number, Array, Object],
  },
  imgBackFaceUrl: {
    type: String,
    required: true,
  },
});
const cardsContext = defineModel("cardsContext", {
  type: Array,
  required: true,
});
const isDisabled = ref(false);
const isFlipped = ref(false);
const rules = ref([]);
const cardStyle = computed(() => {
  const size = (920 - 16 * 4) / Math.sqrt(props.cardsContext.length) - 16;
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
    (((920 - 16 * 4) / Math.sqrt(props.cardsContext.length) - 16) * 3) / 4 / 3;
  return {
    backgroundSize: `${size}px ${size}px`,
  };
});
const backContentStyle = computed(() => ({
  backgroundImage: `url(${props.imgBackFaceUrl})`,
}));
function onToggleFlipCard() {
  if (isDisabled.value) return;
  isFlipped.value = !isFlipped.value;
  if (isFlipped.value) checkRule(props.card);
}
function onFlipBackCard() {
  isFlipped.value = false;
}
function onEnabledDisableMode() {
  isDisabled.value = true;
}
function checkRule(card) {
  rules.value.push(card);
  console.log("🚀 ~ checkRule ~ rules:", rules.value);
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
