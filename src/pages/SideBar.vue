<template>
  <div class="w-full h-full flex">
    <div class="w-[20%] h-full mr-4">
      <div class="my-10 flex flex-col">
        <div class="flex w-full">
          <div class="items-center flex w-[60%]">
            <p class="bg-white border-0 text-2xl font-bold">$</p>
            <input
              type="text"
              class="bg-white border-0 text-2xl font-bold w-full px-4"
              v-model="useCalculationsStore().fianceProperty.homeValue"
            />
          </div>
          <div class="flex flex-row items-center mx-auto justify-end w-[40%]">
            <div class="w-[1px] h-12 bg-slate-300 mr-4"></div>
            <label class="font-cinzel font-extralight text-slate-800 text-xl">
              HOME VALUE
            </label>
          </div>
        </div>
        <Slider
          :min="10000"
          :max="1000000"
          v-model="useCalculationsStore().fianceProperty.homeValue"
          class="w-full my-5 h-[13px]"
          @update:model-value="useCalculationsStore().mortgageCalculation()"
        />
      </div>
      <div class="space-y-4">
        <div class="">
          <label
            class="font-cinzel font-extralight text-slate-800 text-2xl uppercase"
          >
            Down Payment
          </label>
          <div
            class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full"
          >
            <input
              v-model="useCalculationsStore().fianceProperty.downPayment"
              type="text"
              class="text-lg pl-4 w-[80%]"
              @input="useCalculationsStore().mortgageCalculation()"
            />
            <button
              :class="
                !useCalculationsStore().downValue
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              "
              @click="useCalculationsStore().calculateDownPercentage()"
              class="font-semibold text-lg w-[10%]"
              :disabled="!useCalculationsStore().downValue && true"
            >
              %
            </button>
            <button
              :class="
                useCalculationsStore().downValue
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              "
              @click="useCalculationsStore().calculateDownPercentage()"
              class="font-semibold text-lg w-[10%]"
              :disabled="useCalculationsStore().downValue && true"
            >
              $
            </button>
          </div>
        </div>
        <div class="">
          <label
            class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
          >
            Length of Loan
          </label>
          <div
            class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full"
          >
            <input
              v-model="useCalculationsStore().fianceProperty.loanLength"
              type="text"
              class="text-lg pl-4 w-[80%]"
              @input="useCalculationsStore().mortgageCalculation()"
            />
            <button
              :class="
                !useCalculationsStore().loanLengthValue
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              "
              @click="useCalculationsStore().loanLengthYear()"
              class="font-semibold text-lg w-[10%]"
            >
              Yr
            </button>
            <button
              :class="
                useCalculationsStore().loanLengthValue
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              "
              @click="useCalculationsStore().loanLengthYear()"
              class="font-semibold text-lg w-[10%]"
            >
              Mo
            </button>
          </div>
        </div>
        <div class="">
          <label
            class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
          >
            Interest Rate
          </label>
          <div
            class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full"
          >
            <input
              v-model="useCalculationsStore().fianceProperty.interestRate"
              type="text"
              class="text-lg w-[90%] pl-4"
              @input="useCalculationsStore().mortgageCalculation()"
            />
            <button
              class="bg-white text-black font-extrabold text-end text-lg w-[10%] pr-4"
              disabled="true"
            >
              %
            </button>
          </div>
        </div>
        <div class="">
          <label
            class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
          >
            One-time expenses
          </label>
          <div
            class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full"
          >
            <input
              v-model="useCalculationsStore().fianceProperty.oneTimeExpenses"
              type="text"
              class="text-lg pl-4 w-[80%]"
              @input="useCalculationsStore().mortgageCalculation()"
            />
            <button
              :class="
                !useCalculationsStore().oneTimeExpensesValue
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              "
              @click="useCalculationsStore().oneTimePercentage()"
              class="font-semibold text-lg w-[10%]"
              :disabled="!useCalculationsStore().oneTimeExpensesValue && true"
            >
              %
            </button>
            <button
              :class="
                useCalculationsStore().oneTimeExpensesValue
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              "
              @click="useCalculationsStore().oneTimePercentage()"
              class="font-semibold text-lg w-[10%]"
              :disabled="useCalculationsStore().oneTimeExpensesValue && true"
            >
              $
            </button>
          </div>
        </div>
        <div class="">
          <label class="uppercase font-extralight text-slate-800 text-2xl">
            Start Date
          </label>
          <div class="flex-auto">
            <input
              v-model="useCalculationsStore().fianceProperty.startDate"
              type="date"
              id="start_date"
              name="start_date"
              class="text-lg border-2 border-solid border-black w-full px-4"
              @input="useCalculationsStore().mortgageCalculation()"
            />
          </div>
        </div>
        <div class="my-8 flex flex-wrap w-full mx-auto justify-center">
          <button
            :class="
              !useCalculationsStore().paymentFrequencyValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
            "
            @click="useCalculationsStore().paymentFrequencyValue = false"
            class="w-[50%] h-16 text-2xl font-bold"
          >
            Monthly
          </button>
          <button
            :class="
              useCalculationsStore().paymentFrequencyValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
            "
            @click="useCalculationsStore().paymentFrequencyValue = true"
            class="w-[50%] h-16 text-2xl font-bold"
          >
            Bi-weekly
          </button>
        </div>
        <template v-if="!useCalculationsStore().extraFields">
          <div
            class="flex items-center justify-center"
            @click="useCalculationsStore().extraFields = true"
          >
            <div class="pb-2 pr-1">
              <svg
                fill="#000000"
                width="24px"
                height="24px"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-1 cursor-pointer"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z"
                    fill-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <p
              class="uppercase font-epilogue font-extralight text-center text-slate-800 text-2xl cursor-pointer"
            >
              Add Extra Payments
            </p>
          </div>
        </template>

        <template v-if="useCalculationsStore().extraFields">
          <div class="items-center">
            <p
              class="uppercase font-epilogue font-extralight text-center text-slate-800 text-2xl cursor-pointer"
            >
              Extra Payments
            </p>
            <div class="text-center items-center w-full">
              <svg
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 476.213 476.213"
                xml:space="preserve"
                class="animate-bounce mx-auto justify-center mt-5"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <polygon
                    points="347.5,324.393 253.353,418.541 253.353,0 223.353,0 223.353,419.033 128.713,324.393 107.5,345.607 238.107,476.213 368.713,345.606 "
                  ></polygon>
                </g>
              </svg>
            </div>
          </div>
          <div class="space-y-4">
            <div class="">
              <label
                class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
              >
                Monthly or Bi-weekly
              </label>
              <div
                class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full"
              >
                <button
                  class="bg-white text-black font-bold text-lg w-[10%]"
                  disabled="true"
                >
                  $
                </button>
                <input type="number" class="text-lg w-full pl-4" />
              </div>
            </div>
            <div class="">
              <p
                class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
              >
                Starting from
              </p>
              <div class="flex-auto">
                <input
                  v-model="useCalculationsStore().extraStartDate"
                  type="date"
                  id="start_date"
                  name="start_date"
                  class="text-lg border-2 border-solid border-black w-full pl-4"
                />
              </div>
            </div>

            <div class="h-[1px] w-full bg-slate-300"></div>

            <div class="">
              <label
                class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
              >
                Yearly
              </label>
              <div
                class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full"
              >
                <button
                  class="bg-white text-black font-bold text-lg w-[10%]"
                  disabled="true"
                >
                  $
                </button>
                <input type="number" class="text-lg w-full pl-4" />
              </div>
            </div>
            <div class="">
              <p
                class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
              >
                Starting from
              </p>
              <div class="flex-auto">
                <input
                  v-model="useCalculationsStore().extraStartDate"
                  type="date"
                  id="start_date"
                  name="start_date"
                  class="text-lg border-2 border-solid border-black w-full pl-4"
                />
              </div>
            </div>

            <div class="h-[1px] w-full bg-slate-300"></div>

            <div class="">
              <label
                class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
              >
                Quarterly
              </label>
              <div
                class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full"
              >
                <button
                  class="bg-white text-black font-bold text-lg w-[10%]"
                  disabled="true"
                >
                  $
                </button>
                <input type="number" class="text-lg w-full pl-4" />
              </div>
            </div>
            <div class="">
              <p
                class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
              >
                Starting from
              </p>
              <div class="flex-auto">
                <input
                  v-model="useCalculationsStore().extraStartDate"
                  type="date"
                  id="start_date"
                  name="start_date"
                  class="text-lg border-2 border-solid border-black w-full pl-4"
                />
              </div>
            </div>

            <div class="h-[1px] w-full bg-slate-300"></div>

            <div class="">
              <label
                class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
              >
                One-time only
              </label>
              <div
                class="flex border-2 border-black focus:border-black hover:border-black active:border-black w-full"
              >
                <button
                  class="bg-white text-black font-bold text-lg w-[10%]"
                  disabled="true"
                >
                  $
                </button>
                <input type="number" class="text-lg w-full pl-4" />
              </div>
            </div>
            <div class="">
              <p
                class="uppercase font-cinzel font-extralight text-slate-800 text-2xl"
              >
                Starting from
              </p>
              <div class="flex-auto">
                <input
                  v-model="useCalculationsStore().extraStartDate"
                  type="date"
                  id="start_date"
                  name="start_date"
                  class="text-lg border-2 border-solid border-black w-full pl-4"
                />
              </div>
            </div>
          </div>
          <div class="" @click="useCalculationsStore().extraFields = false">
            <p
              class="font-epilogue font-extralight text-center text-slate-800 text-2xl cursor-pointer"
            >
              [-] Remove Extra Payments
            </p>
          </div>
        </template>
      </div>
    </div>
    <div class="w-[80%] flex flex-row">
      <div class="mx-6">
        <div class="bg-slate-300 h-full w-[1px] flex"></div>
      </div>
      <div class="w-full">
        <Charts :totalValue="useCalculationsStore().getCalculations" />
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
