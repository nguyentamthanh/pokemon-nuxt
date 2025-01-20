<template>
  <div
    class="inline-block mr-1 mb-1"
    :class="{ 'opacity-50 pointer-events-none': isDisabled }"
    :style="{
      height: `${(920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16}px`,
      width: `$${
        (((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4
      }px`,
      perspective: `$${
        ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4) * 2
      }px`,
    }"
  >
    <div
      class="relative w-full h-full transition-transform duration-1000 transform-style-3d cursor-pointer"
      :class="{ 'rotate-y-180': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div
        class="absolute w-full h-full backface-hidden overflow-hidden rounded-lg p-4 shadow-lg"
      >
        <div
          class="h-full w-full bg-center bg-no-repeat"
          :style="{
            backgroundImage: `url(${require('@/assets/images/icon_back.png')})`,
            backgroundSize: `${
              (((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) /
              4 /
              3
            }px ${
              (((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) /
              4 /
              3
            }px`,
          }"
        ></div>
      </div>
      <div
        class="absolute w-full h-full bg-[#f8f9fa] transform rotate-y-180 backface-hidden overflow-hidden rounded-lg p-4 shadow-lg"
      >
        <div
          class="h-full w-full bg-center bg-contain bg-no-repeat"
          :style="{
            backgroundImage: `url(${require(`@/assets/` + imgBackFaceUrl)})`,
          }"
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
  cardsContext: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["onFlip"]);
const isDisabled = ref(false);
const isFlipped = ref(false);
function onToggleFlipCard() {
  if (isDisabled.value) return;
  isFlipped.value = !isFlipped.value;
  if (isFlipped.value) emit("onFlip", props.card);
}

function onFlipBackCard() {
  isFlipped.value = false;
}

function onEnabledDisableMode() {
  isDisabled.value = true;
}
</script>
