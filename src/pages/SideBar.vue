<template>
  <div class="">
    <div class="my-16 flex flex-col">
      <div class="flex items-center">
        <p class="bg-white border-0 text-2xl font-bold">$</p>
        <input
          type="text"
          class="bg-white border-0 text-2xl font-bold w-24"
          v-model="useCalculationsStore().fianceProperty.homeValue"
        />
        <div class="w-0.5 h-12 bg-slate-500 mx-5"></div>
        <p class="font-cinzel font-extralight text-slate-800 text-[28px]">
          HOME VALUE
        </p>
      </div>
      <Slider
        :min="10000"
        :max="1000000"
        v-model="useCalculationsStore().fianceProperty.homeValue"
        class="w-full my-5 h-[13px]"
        @update:model-value="useCalculationsStore().mortgageCalculation()"
      />
    </div>
    <div class="my-16">
      <div class="">
        <p
          class="font-cinzel font-extralight text-slate-800 text-[28px] uppercase"
        >
          Down Payment
        </p>
        <div
          class="flex border-2 border-black focus:border-black hover:border-black active:border-black"
        >
          <input
            v-model="useCalculationsStore().fianceProperty.downPayment"
            type="text"
            class="border-1 h-10 text-xl"
            @input="useCalculationsStore().mortgageCalculation()"
          />
          <button
            :class="
              !useCalculationsStore().downValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
            "
            @click="useCalculationsStore().calculateDownPercentage()"
            class="font-semibold text-xl h-10 w-10"
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
            class="font-semibold text-xl h-10 w-10"
            :disabled="useCalculationsStore().downValue && true"
          >
            $
          </button>
        </div>
      </div>
      <div class="">
        <p
          class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
        >
          Length of Loan
        </p>
        <div
          class="flex border-2 border-black focus:border-black hover:border-black active:border-black"
        >
          <input
            v-model="useCalculationsStore().fianceProperty.loanLength"
            type="text"
            class="border-1 h-10 text-xl"
            @input="useCalculationsStore().mortgageCalculation()"
          />
          <button
            :class="
              !useCalculationsStore().loanLengthValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
            "
            @click="useCalculationsStore().loanLengthYear()"
            class="font-semibold text-xl h-10 w-10"
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
            class="font-semibold text-xl h-10 w-10"
          >
            Mo
          </button>
        </div>
      </div>
      <div class="">
        <p
          class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
        >
          Interest Rate
        </p>
        <div
          class="flex border-2 border-black focus:border-black hover:border-black active:border-black"
        >
          <input
            v-model="useCalculationsStore().fianceProperty.interestRate"
            type="text"
            class="border-1 h-10 text-xl w-72"
            @input="useCalculationsStore().mortgageCalculation()"
          />
          <button
            class="bg-white text-black font-bold text-xl h-10 w-14"
            disabled="true"
          >
            %
          </button>
        </div>
      </div>
      <div class="">
        <p
          class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
        >
          One-time expenses
        </p>
        <div
          class="flex border-2 border-black focus:border-black hover:border-black active:border-black"
        >
          <input
            v-model="useCalculationsStore().fianceProperty.oneTimeExpenses"
            type="text"
            class="border-1 h-10 text-xl"
            @input="useCalculationsStore().mortgageCalculation()"
          />
          <button
            :class="
              !useCalculationsStore().oneTimeExpensesValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
            "
            @click="useCalculationsStore().oneTimePercentage()"
            class="font-semibold text-xl h-10 w-10"
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
            class="font-semibold text-xl h-10 w-10"
            :disabled="useCalculationsStore().oneTimeExpensesValue && true"
          >
            $
          </button>
        </div>
      </div>
      <div class="">
        <p
          class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
        >
          Start Date
        </p>
        <div class="flex-auto">
          <input
            v-model="useCalculationsStore().fianceProperty.startDate"
            type="date"
            id="start_date"
            name="start_date"
            class="h-10 w-[340px] py-2 px-3 text-2xl"
            @input="useCalculationsStore().mortgageCalculation()"
          />
        </div>
      </div>
      <div class="my-8 flex flex-wrap">
        <button
          :class="
            !useCalculationsStore().paymentFrequencyValue
              ? 'bg-black text-white'
              : 'bg-white text-black'
          "
          @click="useCalculationsStore().paymentFrequencyValue = false"
          class="w-36 h-16 text-2xl font-bold"
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
          class="w-36 h-16 text-2xl font-bold"
        >
          Bi-weekly
        </button>
      </div>
      <template v-if="!extraFields">
        <div
          class="flex items-center justify-center"
          @click="extraFields = true"
        >
          <div>
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

      <template v-if="extraFields">
        <div class="items-center">
          <p
            class="uppercase font-epilogue font-extralight text-center text-slate-800 text-2xl cursor-pointer"
          >
            Extra Payments
          </p>
          <div class="text-center">
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
              class="animate-bounce"
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
        <div>
          <div class="">
            <p
              class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
            >
              Monthly or Bi-weekly
            </p>
            <div
              class="flex border-2 border-black focus:border-black hover:border-black active:border-black"
            >
              <button
                class="bg-white text-black font-bold text-xl h-10 w-14"
                disabled="true"
              >
                $
              </button>
              <input
                type="text"
                class="border-1 h-10 text-xl w-72"
                @input="useCalculationsStore().mortgageCalculation()"
              />
            </div>
          </div>
          <div class="">
            <p
              class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
            >
              Starting from
            </p>
            <div class="flex-auto">
              <input
                v-model="useCalculationsStore().fianceProperty.startDate"
                type="date"
                id="start_date"
                name="start_date"
                class="h-10 w-[340px] py-2 px-3 text-2xl"
                @input="useCalculationsStore().mortgageCalculation()"
              />
            </div>
          </div>

          <div class="h-0.5 w-[340px] bg-slate-300 mt-8"></div>

          <div class="">
            <p
              class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
            >
              Yearly
            </p>
            <div
              class="flex border-2 border-black focus:border-black hover:border-black active:border-black"
            >
              <button
                class="bg-white text-black font-bold text-xl h-10 w-14"
                disabled="true"
              >
                $
              </button>
              <input
                type="text"
                class="border-1 h-10 text-xl w-72"
                @input="useCalculationsStore().mortgageCalculation()"
              />
            </div>
          </div>
          <div class="">
            <p
              class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
            >
              Starting from
            </p>
            <div class="flex-auto">
              <input
                v-model="useCalculationsStore().fianceProperty.startDate"
                type="date"
                id="start_date"
                name="start_date"
                class="h-10 w-[340px] py-2 px-3 text-2xl"
                @input="useCalculationsStore().mortgageCalculation()"
              />
            </div>
          </div>

          <div class="h-0.5 w-[340px] bg-slate-300 mt-8"></div>

          <div class="">
            <p
              class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
            >
              Quarterly
            </p>
            <div
              class="flex border-2 border-black focus:border-black hover:border-black active:border-black"
            >
              <button
                class="bg-white text-black font-bold text-xl h-10 w-14"
                disabled="true"
              >
                $
              </button>
              <input
                type="text"
                class="border-1 h-10 text-xl w-72"
                @input="useCalculationsStore().mortgageCalculation()"
              />
            </div>
          </div>
          <div class="">
            <p
              class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
            >
              Starting from
            </p>
            <div class="flex-auto">
              <input
                v-model="useCalculationsStore().fianceProperty.startDate"
                type="date"
                id="start_date"
                name="start_date"
                class="h-10 w-[340px] py-2 px-3 text-2xl"
                @input="useCalculationsStore().mortgageCalculation()"
              />
            </div>
          </div>

          <div class="h-0.5 w-[340px] bg-slate-300 mt-8"></div>

          <div class="">
            <p
              class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
            >
              One-time only
            </p>
            <div
              class="flex border-2 border-black focus:border-black hover:border-black active:border-black"
            >
              <button
                class="bg-white text-black font-bold text-xl h-10 w-14"
                disabled="true"
              >
                $
              </button>
              <input
                type="text"
                class="border-1 h-10 text-xl w-72"
                @input="useCalculationsStore().mortgageCalculation()"
              />
            </div>
          </div>
          <div class="">
            <p
              class="uppercase font-cinzel font-extralight text-slate-800 text-[28px]"
            >
              Starting from
            </p>
            <div class="flex-auto">
              <input
                v-model="useCalculationsStore().fianceProperty.startDate"
                type="date"
                id="start_date"
                name="start_date"
                class="h-10 w-[340px] py-2 px-3 text-2xl"
                @input="useCalculationsStore().mortgageCalculation()"
              />
            </div>
          </div>
        </div>
        <div class="" @click="extraFields = false">
          <p
            class="font-epilogue font-extralight text-center text-slate-800 text-2xl cursor-pointer"
          >
            [-] Remove Extra Payments
          </p>
        </div>
      </template>
    </div>
  </div>
  <div class="mx-8">
    <div class="bg-slate-300 mr-10 h-full w-0.5 flex"></div>
  </div>
  <MainPage :totalValue="useCalculationsStore().getCalculations" />
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { useCalculationsStore } from "../store/calculations";
import MainPage from "../pages/MainPage.vue";

const mortgagePayment = ref(0);
const extraFields = ref(false);
useCalculationsStore().mortgageCalculation();

// https://westcaprealestate.com/mortgage-calculator/  // Mortgage Calculator

//fUNCTIONS

// onMounted(() => {
//   propertyFinancing(fianceProperty.value);
// });

// const propertyFinancing = (fianceProperty) => {
//   let object = this.fianceProperty;

//   //Downpayment in currency
//   object.downPayment = Number(
//     (
//       (object.downPaymentPercentage / 100) *
//       object.homeValue
//     ).toFixed(0)
//   );

//   //Remaining amount after downpayment substraction and it is also our principle amount
//   object.principleAmount =
//     object.homeValue - object.downPayment;

//   //Loan term in months e.g 30years = 360months
//   const n = object.loanLength * 12;

//   //Check interest rate != 0
//   if (object.interestRate != 0) {
//     //Formula to calculate loan amount
//     let interest = object.interestRate / 100 / 12;

//     let a = interest * Math.pow(1 + interest, n);
//     let b = Math.pow(1 + interest, n) - 1;
//     let c = 0;

//     c = a / b;
//     //Loan amount withclosing cost
//     object.loanAmount =
//       Number(object.principleAmount * c) + Number(object.closingCosts);
//     object.loanAmount = Number(object.loanAmount.toFixed(0));
//   } else {
//     //If interest rate is 0
//     object.loanAmount = Number(object.principleAmount / n).toFixed(0);
//   }

//   return object;
// };
</script>

<style scoped></style>
./MainPage.vue
