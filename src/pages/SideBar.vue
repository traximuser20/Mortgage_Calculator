<template>
  <div class="w-full h-full flex">
    <div class="w-[22%] h-full mr-[5px]">
      <div class="mb-8 flex flex-col">
        <div class="flex w-full">
          <div class="border-b pb-[10px] border-[#e6e6e6]">
            <label class="Cinzel font-[400] text-[#333] text-[16px]">
              HOME VALUE
            </label>
          </div>
        </div>
        <div class="items-center flex w-[60%] mt-3">
          <p class="bg-white border-0 text-[14px] font-bold">$</p>
          <input type="text" class="bg-white border-0  text-[#333] text-[20px] font-bold w-full ml-2 pr-2"
            v-model="useCalculationsStore().fianceProperty.homeValue" />
        </div>

        <Slider :min="10000" :max="1000000" v-model="useCalculationsStore().fianceProperty.homeValue"
          class="w-full my-3 h-[10px]" @update:model-value="useCalculationsStore().mortgageCalculation()" />
      </div>
      <div class="space-y-4">
        <div class="">
          <label class="Cinzel font-[400] text-[#333] text-[16px] uppercase tracking-[0.5px]">
            Down Payment
          </label>
          <div class="flex border border-[#e6e6e6] focus:border-black  active:border-black w-full">
            <input v-model="useCalculationsStore().fianceProperty.downPayment" type="text"
              class="text-[16px] font-bold text-[#333]  p-[6px] w-[75%]"
              @input="useCalculationsStore().mortgageCalculation()" />
            <button :class="!useCalculationsStore().downValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
              " @click="useCalculationsStore().calculateDownPercentage()" class="font-semibold text-[16px] w-[13%]"
              :disabled="!useCalculationsStore().downValue && true">
              %
            </button>
            <button :class="useCalculationsStore().downValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
              " @click="useCalculationsStore().calculateDownPercentage()" class="font-semibold text-[16px] w-[12%]"
              :disabled="useCalculationsStore().downValue && true">
              $
            </button>
          </div>
        </div>
        <div class="">
          <label class="Cinzel font-[400] text-[#333] text-[16px] uppercase tracking-[0.5px]">
            Length of Loan
          </label>
          <div class="flex border border-[#e6e6e6] focus:border-black  active:border-black w-full">
            <input v-model="useCalculationsStore().fianceProperty.loanLength" type="text"
              class="text-[16px] font-bold text-[#333]  p-[6px] w-[75%]"
              @input="useCalculationsStore().mortgageCalculation()" />
            <button :class="!useCalculationsStore().loanLengthValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
              " @click="useCalculationsStore().loanLengthYear()" class="font-semibold text-[16px] w-[13%]">
              Yr
            </button>
            <button :class="useCalculationsStore().loanLengthValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
              " @click="useCalculationsStore().loanLengthYear()" class="font-semibold text-[16px] w-[12%]">
              Mo
            </button>
          </div>
        </div>
        <div class="">
          <label class="Cinzel font-[400] text-[#333] text-[16px] uppercase tracking-[0.5px]">
            Interest Rate
          </label>
          <div class="flex border border-[#e6e6e6] focus:border-black  active:border-black w-full">
            <input v-model="useCalculationsStore().fianceProperty.interestRate" type="text"
              class="text-[16px] font-bold text-[#333]  p-[6px] w-[87%]"
              @input="useCalculationsStore().mortgageCalculation()" />
            <button class="bg-white text-black font-extrabold text-center text-[16px] w-[13%] " disabled="true">
              %
            </button>
          </div>
        </div>
        <div class="">
          <label class="Cinzel font-[400] text-[#333] text-[16px] uppercase tracking-[0.5px]">
            One-time expenses
          </label>
          <div class="flex border border-[#e6e6e6] focus:border-black  active:border-black w-full">
            <input v-model="useCalculationsStore().fianceProperty.oneTimeExpenses" type="text"
              class="text-[16px] font-bold text-[#333]  p-[6px] w-[75%]"
              @input="useCalculationsStore().mortgageCalculation()" />
            <button :class="!useCalculationsStore().oneTimeExpensesValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
              " @click="useCalculationsStore().oneTimePercentage()" class="font-semibold text-[16px] w-[13%]"
              :disabled="!useCalculationsStore().oneTimeExpensesValue && true">
              %
            </button>
            <button :class="useCalculationsStore().oneTimeExpensesValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
              " @click="useCalculationsStore().oneTimePercentage()" class="font-semibold text-[16px] w-[12%]"
              :disabled="useCalculationsStore().oneTimeExpensesValue && true">
              $
            </button>
          </div>
        </div>
        <div class="">
          <label class="Cinzel font-[400] text-[#333] text-[16px] uppercase tracking-[0.5px]">
            Start Date
          </label>
          <div class="flex-auto">
            <input v-model="useCalculationsStore().fianceProperty.startDate" type="date" id="start_date"
              name="start_date" class="text-[16px] font-semibold border p-[6px] border-[#e6e6e6] w-full "
              @input="useCalculationsStore().mortgageCalculation()" />
          </div>
        </div>
        <div class="">
          <label class="Cinzel font-[400] text-[#333] text-[16px] uppercase tracking-[0.5px]">
            Payment Frequency
          </label>
          <div class="mb-8 mt-2 flex flex-wrap w-full mx-auto justify-center">
            <button :class="!useCalculationsStore().paymentFrequencyValue
                ? 'bg-[#0f182d] text-white'
                : 'bg-white text-[#0f182d]'
              " @click="useCalculationsStore().paymentFrequencyValue = false" class="w-[50%] border h-[70px] text-[19px] font-bold">
              Monthly
            </button>
            <button :class="useCalculationsStore().paymentFrequencyValue
                ? 'bg-[#0f182d] text-white'
                : 'bg-white text-[#0f182d]'
              " @click="useCalculationsStore().paymentFrequencyValue = true" class="w-[50%] border h-[70px] text-[19px] font-bold">
              Bi-weekly
            </button>
          </div>
        </div>
        <template v-if="!useCalculationsStore().extraFields">
          <div class="flex items-center justify-center" @click="useCalculationsStore().extraFields = true">
            <div class="pb-1">
              <svg fill="#000000" width="12px" height="12px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"
                class="mr-1 cursor-pointer">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z"
                    fill-rule="evenodd"></path>
                </g>
              </svg>
            </div>
            <p class="uppercase font-extralight text-center text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel cursor-pointer">
              Add Extra Payments
            </p>
          </div>
        </template>

        <template v-if="useCalculationsStore().extraFields">
          <div class="items-center">
            <p class="uppercase font-extralight text-center text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel cursor-pointer">
              Extra Payments
            </p>
            <div class="text-center items-center w-full">
              <svg fill="#000000" height="12px" width="12px" version="1.1" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 476.213 476.213" xml:space="preserve" class="animate-bounce mx-auto justify-center mt-5">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <polygon
                    points="347.5,324.393 253.353,418.541 253.353,0 223.353,0 223.353,419.033 128.713,324.393 107.5,345.607 238.107,476.213 368.713,345.606 ">
                  </polygon>
                </g>
              </svg>
            </div>
          </div>
          <div class="space-y-4">
            <div class="">
              <label class="uppercase font-extralight text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel">
                Monthly or Bi-weekly
              </label>
              <div class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full">
                <button class="bg-white text-black font-bold text-lg w-[10%]" disabled="true">
                  $
                </button>
                <input type="number" class="text-lg w-full pl-4" />
              </div>
            </div>
            <div class="">
              <p class="uppercase font-extralight text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel">
                Starting from
              </p>
              <div class="flex-auto">
                <input v-model="useCalculationsStore().extraStartDate" type="date" id="start_date" name="start_date"
                  class="text-lg border-2 border-solid border-black w-full pl-4" />
              </div>
            </div>

            <div class="h-[1px] w-full bg-slate-300"></div>

            <div class="">
              <label class="uppercase font-extralight text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel">
                Yearly
              </label>
              <div class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full">
                <button class="bg-white text-black font-bold text-lg w-[10%]" disabled="true">
                  $
                </button>
                <input type="number" class="text-lg w-full pl-4" />
              </div>
            </div>
            <div class="">
              <p class="uppercase font-extralight text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel">
                Starting from
              </p>
              <div class="flex-auto">
                <input v-model="useCalculationsStore().extraStartDate" type="date" id="start_date" name="start_date"
                  class="text-lg border-2 border-solid border-black w-full pl-4" />
              </div>
            </div>

            <div class="h-[1px] w-full bg-slate-300"></div>

            <div class="">
              <label class="uppercase font-extralight text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel">
                Quarterly
              </label>
              <div class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full">
                <button class="bg-white text-black font-bold text-lg w-[10%]" disabled="true">
                  $
                </button>
                <input type="number" class="text-lg w-full pl-4" />
              </div>
            </div>
            <div class="">
              <p class="uppercase font-extralight text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel">
                Starting from
              </p>
              <div class="flex-auto">
                <input v-model="useCalculationsStore().extraStartDate" type="date" id="start_date" name="start_date"
                  class="text-lg border-2 border-solid border-black w-full pl-4" />
              </div>
            </div>

            <div class="h-[1px] w-full bg-slate-300"></div>

            <div class="">
              <label class="uppercase font-extralight text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel">
                One-time only
              </label>
              <div class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full">
                <button class="bg-white text-black font-bold text-lg w-[10%]" disabled="true">
                  $
                </button>
                <input type="number" class="text-lg w-full pl-4" />
              </div>
            </div>
            <div class="">
              <p class="uppercase font-extralight text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel">
                Starting from
              </p>
              <div class="flex-auto">
                <input v-model="useCalculationsStore().extraStartDate" type="date" id="start_date" name="start_date"
                  class="text-lg border-2 border-solid border-black w-full pl-4" />
              </div>
            </div>
          </div>
          <div class="" @click="useCalculationsStore().extraFields = false">
            <p class="font-extralight text-center text-[#0f182d] text-[18px] tracking-[0.5px] Cinzel cursor-pointer">
              [-] Remove Extra Payments
            </p>
          </div>
        </template>
      </div>
    </div>
    <div class="w-[78%] flex flex-row">
      <div class="mx-6">
        <div class="bg-slate-300 h-full w-[1px] flex"></div>
      </div>
      <div class="w-full">
        <Charts :totalValue="useCalculationsStore().currencyFormat(useCalculationsStore().getCalculations)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { useCalculationsStore } from "@/stores/calculations.js";
import Charts from "@/views/MortgageCalculator/charts.vue";

const mortgagePayment = ref(0);
useCalculationsStore().mortgageCalculation();
</script>

<style scoped></style>
