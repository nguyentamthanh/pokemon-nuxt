<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
const name = ref("Vite");
name.value = "Vite3r234324";
console.log("🚀 ~ name.value:", name.value);
</script>
