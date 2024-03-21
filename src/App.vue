<template>
  <div class="bg-white px-6 shadow-2xl m-8 rounded-lg w-full h-full">
    <div>
      <h1 class="uppercase font-cinzel font-extralight text-black text-[80px]">
        Mortgage Calculator
      </h1>
      <p class="font-epilogue font-normal text-[29px] text-black">
        Estimate your monthly payment and see how much house you can afford.
      </p>
    </div>
    <div class="flex flex-row h-full w-full px-auto py-auto">
      <SideBar />
    </div>
  </div>
</template>

<script setup>
import SideBar from "./pages/SideBar.vue";
</script>

<style scoped></style>
