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
            @click="useCalculationsStore().calculateDownRaqam()"
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
          />
          <button
            :class="
              !useCalculationsStore().loanLengthValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
            "
            @click="useCalculationsStore().loanLengthValue = false"
            class="font-semibold text-xl h-10 w-10"
          >
            Yr
          </button>
          <button
            :class="
              useCalculationsStore().loanLengthValue ? 'bg-black text-white' : 'bg-white text-black'
            "
            @click="useCalculationsStore().loanLengthValue = true"
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
            class="border-1 h-10 text-xl"
          />
          <button class="bg-black text-white font-semibold text-xl h-10 w-10">
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
          />
          <button
            :class="
              !useCalculationsStore().oneTimeExpensesValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
            "
            @click="useCalculationsStore().oneTimeExpensesValue = false"
            class="font-semibold text-xl h-10 w-10"
          >
            %
          </button>
          <button
            :class="
              useCalculationsStore().oneTimeExpensesValue
                ? 'bg-black text-white'
                : 'bg-white text-black'
            "
            @click="useCalculationsStore().oneTimeExpensesValue = true"
            class="font-semibold text-xl h-10 w-10"
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
            value="2024-03-12"
            class="shadow appearance-none border rounded h-10 w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
    </div>
  </div>
  <div class="mx-8">
    <div class="bg-slate-300 mr-10 h-full w-0.5 flex"></div>
  </div>
  <MainPage :totalValue="useCalculationsStore().getCalculations" />
</template>

<script setup>
import { ref } from "vue";
import { useCalculationsStore } from "../store/calculations";
import MainPage from "../components/MainPage.vue";

const mortgagePayment = ref(0);

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
