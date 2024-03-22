<template>
  <div class="w-[100%] h-[100%]">
    <div class="bg-white p-6 shadow-2xl mx-6 my-6 rounded-lg">
      <div>
        <h1
          class="uppercase font-cinzel font-extralight text-black text-[80px]"
        >
          Mortgage Calculator
        </h1>
        <p class="font-epilogue font-normal text-[29px] text-black">
          Estimate your monthly payment and see how much house you can afford.
        </p>
      </div>
      <div class="flex flex-row px-auto py-auto">
        <SideBar />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "./pages/SideBar.vue";
</script>

<style scoped></style>
