<template>
  <div
    :class="[
      'inline-block mr-4 mb-4 relative',
      { 'cursor-default': isDisabled },
    ]"
    :style="{
      height: `${(920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16}px`,
      width: `${
        (((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4
      }px`,
      perspective: `${
        ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4) * 2
      }px`,
    }"
  >
    <div class="text-black">
      {{ isFlipped }}
    </div>
    <div
      :class="[
        'w-full h-full transition-transform duration-[1s] cursor-pointer relative transform-gpu',
        { 'rotate-y-180': isFlipped },
      ]"
      @click="onToggleFlipCard"
    >
      <!-- Front face -->
      <div
        class="absolute w-full h-full overflow-hidden shadow-[0_3px_10px_3px_rgba(0,0,0,0.2)] p-4 rounded-2xl backface-hidden"
      >
        <div
          class="w-full h-full bg-center bg-no-repeat bg-[url(/images/icon_back.png)]"
          :style="{
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
      <!-- Back face -->
      <div
        class="absolute w-full h-full overflow-hidden shadow-[0_3px_10px_3px_rgba(0,0,0,0.2)] p-4 rounded-2xl backface-hidden bg-white rotate-y-180 transform"
      >
        <div
          class="bg-contain bg-[center_center] bg-no-repeat h-full w-full"
          :class="`bg-[url(${imgBackFaceUrl})]`"
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
const isDisabled = ref(false);
const isFlipped = ref(false);
function onToggleFlipCard() {
  if (isDisabled.value) return;
  isFlipped.value = !isFlipped.value;
}
</script>
