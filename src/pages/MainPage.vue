<template>
  <div class="w-[100%]">
    <div class="flex flex-row items-center mx-4 mb-12">
      <p class="font-bold text-5xl text-black pr-4">$</p>
      <p class="font-epilogue font-bold text-5xl text-black w-96">
        {{ props.totalValue }}
      </p>
      <div class="bg-slate-300 h-20 w-[1px] mx-8"></div>
      <p class="font-sans font-normal text-2xl text-black">
        Your estimated Monthly payment
      </p>
    </div>
    <h1 class="uppercase font-cinzel font-normal text-black text-5xl mb-3">
      Payment Breakdown
    </h1>
    <div class="bg-slate-300 h-[1px] w-full"></div>
    <div class="">
      <div class="grid grid-row-3 grid-flow-col">
        <div class="col-span-1 row-span-3 gap-4">
          <div class="mx-auto justify-center">
            <div class="p-4 w-96">
              <Chart
                type="doughnut"
                :data="pieData"
                :options="pieOptions"
                :plugins="plugins"
              />
            </div>
            <div class="bg-[#F7F7F7] rounded-xl">
              <div class="flex items-center text-center">
                <div class="bg-[#0F172A] rounded-full h-3 w-3"></div>
                <p class="font-normal text-sm font-serif">
                  Principal & Interest : ${{
                    useCalculationsStore().fianceProperty.monthlyInterestRate
                  }}
                </p>
              </div>
              <div class="flex items-center text-center">
                <div class="bg-[#609AF8] rounded-full h-3 w-3"></div>
                <p class="font-normal text-sm font-serif">
                  Extra Payments : ${{
                    useCalculationsStore().fianceProperty.extraPayments
                  }}
                </p>
              </div>
              <div class="flex items-center text-center">
                <div class="bg-[#76DB9B] rounded-full h-3 w-3"></div>
                <p class="font-normal text-sm font-serif">
                  Home Insurance : ${{
                    useCalculationsStore().fianceProperty.homeInsuranceMonthly
                  }}
                </p>
              </div>
              <div class="flex items-center text-center">
                <div class="bg-[#C93D82] rounded-full h-3 w-3"></div>
                <p class="font-normal text-sm font-serif">
                  Property Taxes : ${{
                    useCalculationsStore().fianceProperty.propertyTaxMonthly
                  }}
                </p>
              </div>
              <div class="flex items-center text-center">
                <div class="bg-[#EAB308] rounded-full h-3 w-3"></div>
                <p class="font-normal text-sm font-serif">
                  HOA Fees : ${{
                    useCalculationsStore().fianceProperty.hoaFees
                  }}
                </p>
              </div>
              <div class="flex items-center text-center">
                <div class="bg-[#5457CD] rounded-full h-3 w-3"></div>
                <p class="font-normal text-sm font-serif">
                  PMI : ${{ useCalculationsStore().fianceProperty.pmiMonthly }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-2 row-span-1 my-6">
          <h1 class="uppercase font-cinzel font-normal text-black text-5xl">
            Customize your mortgage payment
          </h1>
          <div class="flex items-center justify-center">
            <div class="w-10">
              <div
                class="h-6 w-6 bg-[#0F172A] mr-3 hover:h-8 hover:w-8 transition-all duration-200 cursor-pointer"
              ></div>
            </div>
            <div class="grid grid-cols-3 w-full">
              <div class="col-span-1 text-left">
                <p class="font-epilogue font-normal text-[29px] text-black">
                  Principal & Interest
                </p>
              </div>
              <div class="col-span-1 text-right">
                <p class="font-epilogue font-bold text-[29px] text-black">$</p>
              </div>
              <div class="col-span-1 text-right">
                <p class="font-epilogue font-bold text-[29px] text-black">
                  {{
                    useCalculationsStore().fianceProperty.monthlyInterestRate
                  }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-10">
              <div
                class="h-6 w-6 bg-[#609AF8] mr-3 hover:h-8 hover:w-8 transition-all duration-200 cursor-pointer"
              ></div>
            </div>
            <div class="grid grid-cols-3 w-full">
              <div class="col-span-1 text-left">
                <p class="font-epilogue font-normal text-[29px] text-black">
                  Monthly Extra Payment
                </p>
              </div>
              <div class="col-span-1 text-right">
                <p class="font-epilogue font-bold text-[29px] text-black">$</p>
              </div>
              <div class="col-span-1 text-right">
                <p class="font-epilogue font-bold text-[29px] text-black">
                  {{ useCalculationsStore().fianceProperty.extraPayments }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-8 mt-6">
          <div class="bg-slate-300 h-[1px] w-full"></div>
          <div class="flex my-6 ml-3">
            <div class="w-56 mx-12">
              <div
                class="bg-white text-xl cursor-pointer hover:underline"
                @click="
                  useCalculationsStore().extraFields =
                    !useCalculationsStore().extraFields
                "
              >
                + Add Extra Payments
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-10 pb-1">
              <div
                class="h-6 w-6 bg-[#76DB9B] mr-3 hover:h-8 hover:w-8 transition-all duration-200 cursor-pointer"
              ></div>
            </div>
            <div class="grid grid-cols-3">
              <div class="col-span-2">
                <p
                  class="font-epilogue font-normal text-[29px] text-black w-full"
                >
                  Home insurance (per year)
                </p>
              </div>
              <div class="col-span-1 text-right flex items-center">
                <p class="text-2xl mx-4">+</p>
                <div
                  class="border-2 border-black focus:border-black hover:border-black active:border-black"
                >
                  <input
                    v-model="
                      useCalculationsStore().fianceProperty.homeInsurance
                    "
                    type="text"
                    class="border-1 h-10 text-2xl w-44 font-extrabold pl-4"
                  />
                  <button
                    :class="
                      !useCalculationsStore().homeInsuranceValue
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    "
                    @click="useCalculationsStore().homeInsurancePercentage()"
                    class="font-semibold text-2xl h-10 w-10"
                    :disabled="
                      !useCalculationsStore().homeInsuranceValue && true
                    "
                  >
                    %
                  </button>
                  <button
                    :class="
                      useCalculationsStore().homeInsuranceValue
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    "
                    @click="useCalculationsStore().homeInsuranceAmount()"
                    class="font-semibold text-2xl h-10 w-10"
                    :disabled="
                      useCalculationsStore().homeInsuranceValue && true
                    "
                  >
                    $
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-10 pb-1">
              <div
                class="h-6 w-6 bg-[#C93D82] mr-3 hover:h-8 hover:w-8 transition-all duration-200 cursor-pointer"
              ></div>
            </div>
            <div class="grid grid-cols-3">
              <div class="col-span-2">
                <p
                  class="font-epilogue font-normal text-[29px] text-black w-full"
                >
                  Property Taxes (per year)
                </p>
              </div>
              <div class="col-span-1 text-right flex items-center">
                <p class="text-2xl mx-4">+</p>
                <div
                  class="border-2 border-black focus:border-black hover:border-black active:border-black"
                >
                  <input
                    v-model="useCalculationsStore().fianceProperty.propertyTax"
                    type="text"
                    class="border-1 h-10 text-2xl w-44 font-extrabold pl-4"
                  />
                  <button
                    :class="
                      !useCalculationsStore().propertyTaxValue
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    "
                    @click="useCalculationsStore().propertyTaxPercentage()"
                    class="font-semibold text-2xl h-10 w-10"
                    :disabled="!useCalculationsStore().propertyTaxValue && true"
                  >
                    %
                  </button>
                  <button
                    :class="
                      useCalculationsStore().propertyTaxValue
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    "
                    @click="useCalculationsStore().propertyTaxAmount()"
                    class="font-semibold text-2xl h-10 w-10"
                    :disabled="useCalculationsStore().propertyTaxValue && true"
                  >
                    $
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-10 pb-1">
              <div
                class="h-6 w-6 bg-[#EAB308] mr-3 hover:h-8 hover:w-8 transition-all duration-200 cursor-pointer"
              ></div>
            </div>
            <div class="grid grid-cols-3">
              <div class="col-span-2">
                <p
                  class="font-epilogue font-normal text-[29px] text-black w-full"
                >
                  HOA Fees (per month)
                </p>
              </div>
              <div class="col-span-1 text-right flex items-center">
                <p class="text-2xl mx-4">+</p>
                <div
                  class="border-2 border-black focus:border-black hover:border-black active:border-black"
                >
                  <button
                    class="bg-white text-black font-bold text-2xl h-10 w-12 pt-1"
                    disabled="true"
                  >
                    $
                  </button>
                  <input
                    v-model="useCalculationsStore().fianceProperty.hoaFees"
                    type="text"
                    class="border-1 h-10 text-2xl w-52 font-extrabold pt-1 pl-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-10 pb-1">
              <div
                class="h-6 w-6 bg-[#5457CD] mr-3 hover:h-8 hover:w-8 transition-all duration-200 cursor-pointer"
              ></div>
            </div>
            <div class="grid grid-cols-3">
              <div class="col-span-2">
                <p
                  class="font-epilogue font-normal text-[29px] text-black w-full"
                >
                  PMI (per year)
                </p>
              </div>
              <div class="col-span-1 text-right flex items-center">
                <p class="text-2xl mx-4">+</p>
                <div
                  class="border-2 border-black focus:border-black hover:border-black active:border-black"
                >
                  <input
                    v-model="useCalculationsStore().fianceProperty.pmi"
                    type="text"
                    class="border-1 h-10 text-2xl w-44 font-extrabold pl-4"
                  />
                  <button
                    :class="
                      !useCalculationsStore().pmiValue
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    "
                    @click="useCalculationsStore().pmiPercentage()"
                    class="font-semibold text-2xl h-10 w-10"
                    :disabled="!useCalculationsStore().pmiValue && true"
                  >
                    %
                  </button>
                  <button
                    :class="
                      useCalculationsStore().pmiValue
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    "
                    @click="useCalculationsStore().pmiAmount()"
                    class="font-semibold text-2xl h-10 w-10"
                    :disabled="useCalculationsStore().pmiValue && true"
                  >
                    $
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 ml-14 mr-14">
            <div class="col-span-2 w-full">
              <div class="border-2 border-black border-solid px-5 py-1">
                <p class="font-sans font-bold text-3xl text-black">
                  Total
                  {{ useCalculationsStore().paymentFrequencyType() }} Payment
                </p>
              </div>
            </div>
            <div class="col-span-1">
              <div class="border-2 border-black border-solid flex items-center">
                <p class="font-sans font-bold text-3xl text-black px-5 py-1">
                  $
                </p>
                <p class="font-sans font-bold text-3xl text-black pl-4">
                  {{ props.totalValue }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1
        class="uppercase font-cinzel font-extralight text-black text-[80px] mt-8"
      >
        Total Of All Payments
      </h1>
      <div class="bg-slate-300 mx-8 h-0.5 w-full"></div>
      <div class="flex w-full group">
        <div class="justify-start mx-6 space-y-[50px] mt-14 pr-4">
          <p class="text-2xl">Down Payment & One-time Expenses</p>
          <p class="text-2xl">Principal</p>
          <p class="text-2xl">Interest</p>
          <p class="text-2xl">Extra Payments</p>
          <p class="text-2xl">Home insurance</p>
          <p class="text-2xl">Property taxes</p>
          <p class="text-2xl">HOA fees</p>
          <div class="text-2xl">
            PMI
            <div class="tooltip">
              <span
                ref="tooltip"
                @mouseover="showTooltip"
                @mouseleave="hideTooltip"
                >{{ text }}</span
              >
              <div v-if="isTooltipVisible" class="tooltiptext">
                {{ tooltipText }}
                <span class="arrow"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[50%]">
          <Chart
            type="bar"
            :data="chartData"
            :options="chartOptions"
            class="h-[670px] my-10 justify-center flex mx-22"
          />
        </div>
        <div class="w-[20%] space-y-[50px] mt-16 mx-6">
          <div class="grid grid-cols-2">
            <p class="text-3xl font-bold">$</p>
            <p class="text-2xl hover:font-extrabold text-right">52,500</p>
          </div>
          <div class="grid grid-cols-2">
            <p class="text-3xl text-left font-bold">$</p>
            <p class="text-2xl text-right hover:font-extrabold">308,000</p>
          </div>
          <div class="grid grid-cols-2">
            <p class="text-3xl font-bold">$</p>
            <p class="text-2xl text-right hover:font-extrabold">287,227.82</p>
          </div>
          <div class="grid grid-cols-2">
            <p class="text-3xl font-bold">$</p>
            <p class="text-2xl text-right hover:font-extrabold">0</p>
          </div>
          <div class="grid grid-cols-2">
            <p class="text-3xl font-bold">$</p>
            <p class="text-2xl text-right hover:font-extrabold">36,750</p>
          </div>
          <div class="grid grid-cols-2">
            <p class="text-3xl font-bold">$</p>
            <p class="text-2xl text-right hover:font-extrabold">131,248.8</p>
          </div>
          <div class="grid grid-cols-2">
            <p class="text-3xl font-bold">$</p>
            <p class="text-2xl text-right hover:font-extrabold">28,800</p>
          </div>
          <div class="grid grid-cols-2">
            <p class="text-3xl font-bold">$</p>
            <p class="text-2xl text-right hover:font-extrabold">12,825.04</p>
          </div>
        </div>
      </div>
      <h1 class="uppercase font-cinzel font-extralight text-black text-[80px]">
        Amortization Schedule
      </h1>
      <div class="bg-slate-300 h-0.5 w-full"></div>
      <div>
        <div class="card my-8">
          <apexchart
            :options="apexChartOptions"
            :series="series"
            type="area"
            height="350"
          />
        </div>
      </div>
      <div class="my-8">
        <div class="grid grid-cols-3">
          <div class="col-span-1">
            <label class="text-3xl font-epilogue font-normal uppercase">
              Mortgage Payoff Date:
            </label>
          </div>
          <div class="col-span-2">
            <label class="text-3xl font-epilogue font-normal uppercase">
              Payment breakdown as of 2027
            </label>
          </div>
        </div>

        <div class="bg-slate-300 h-0.5 w-full my-6"></div>

        <div class="grid grid-cols-3">
          <div class="col-span-1">
            <div class="grid grid-rows-3">
              <div class="row-span-1">
                <label class="text-3xl font-epilogue font-extralight uppercase">
                  February 21
                </label>
              </div>
              <div class="row-span-2">
                <label class="text-8xl font-serif font-normal uppercase">
                  2054
                </label>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="grid grid-rows-3">
              <div class="row-span-1">
                <div class="flex items-center justify-center pl-4">
                  <div class="w-10">
                    <div
                      class="h-6 w-6 bg-[#3FA9F5] mr-3 hover:h-8 hover:w-8 transition-all duration-200 cursor-pointer"
                    ></div>
                  </div>
                  <div class="grid grid-cols-3 w-full">
                    <div class="col-span-1 text-left">
                      <p
                        class="font-epilogue font-normal text-[29px] text-black"
                      >
                        Remaining Balance
                      </p>
                    </div>
                    <div class="col-span-1 text-right">
                      <p
                        class="font-epilogue font-normal text-[29px] text-black"
                      >
                        $
                      </p>
                    </div>
                    <div class="col-span-1 text-right">
                      <p
                        class="font-epilogue font-normal text-[29px] text-black"
                      >
                        22,440.18
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-span-1">
                <div class="flex items-center justify-center pl-4">
                  <div class="w-10">
                    <div
                      class="h-6 w-6 bg-[#0F182D] mr-3 hover:h-8 hover:w-8 transition-all duration-200 cursor-pointer"
                    ></div>
                  </div>
                  <div class="grid grid-cols-3 w-full">
                    <div class="col-span-1 text-left">
                      <p
                        class="font-epilogue font-normal text-[29px] text-black"
                      >
                        Principal
                      </p>
                    </div>
                    <div class="col-span-1 text-right">
                      <p
                        class="font-epilogue font-normal text-[29px] text-black"
                      >
                        $
                      </p>
                    </div>
                    <div class="col-span-1 text-right">
                      <p
                        class="font-epilogue font-normal text-[29px] text-black"
                      >
                        18,221.64
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-span-1">
                <div class="flex items-center justify-center pl-4">
                  <div class="w-10">
                    <div
                      class="h-6 w-6 bg-[#FF7F50] mr-3 hover:h-8 hover:w-8 transition-all duration-200 cursor-pointer"
                    ></div>
                  </div>
                  <div class="grid grid-cols-3 w-full">
                    <div class="col-span-1 text-left">
                      <p
                        class="font-epilogue font-normal text-[29px] text-black"
                      >
                        Interest
                      </p>
                    </div>
                    <div class="col-span-1 text-right">
                      <p
                        class="font-epilogue font-normal text-[29px] text-black"
                      >
                        $
                      </p>
                    </div>
                    <div class="col-span-1 text-right">
                      <p
                        class="font-epilogue font-normal text-[29px] text-black"
                      >
                        1,619.28
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useCalculationsStore } from "@/stores/calculations.js";
import VueApexCharts from "vue3-apexcharts";

const tooltipText = ref(
  "Each year, your PMI is recalculated using your current loan balance, so the amount you pay decreases as you pay down the loan. The Homeowners Protection Act of 1998 requires that lenders remove private mortgage insurance when a borrower reaches a 78 percent loan-to-value ratio."
);
const text = ref("(until February 21, 2031)");
const isTooltipVisible = ref(false);

const showTooltip = () => {
  isTooltipVisible.value = true;
};

const hideTooltip = () => {
  isTooltipVisible.value = false;
};

// const apexDonutOptions = ref({
//   labels: ["Team A", "Team B", "Team C", "Team D", "Team E", "Team F"],
//   colors: ["#0F182D", "#70A1FF", "#7BED9F", "#FF6B81", "#ECCC68", "#5352ED"],
// });

// const apexDonutSeries = ref([73, 4, 16, 7, 41, 48]);

const series = ref([
  {
    name: "Series 1",
    data: [
      202648.3, 193393.29, 184015.11, 164511.86, 154936.57, 145274.21,
      135523.82, 105310.23, 90000.64, 74456.64, 59145.6, 36556.56, 16845.0,
      2713.44, 0.0,
    ],
  },
  {
    name: "Series 2",
    data: [
      10037.94, 10605.14, 11185.24, 11779.24, 12386.24, 13007.24, 13642.24,
      14289.24, 15622.24, 16307.24, 17334.78, 18221.64, 19153.91, 3286.27,
    ],
  },
  {
    name: "Series 3",
    data: [
      9828.2, 9331.76, 8835.31, 8338.86, 7842.41, 7346.96, 6851.51, 6356.06, 5,
      642.52, 5, 159.67, 4, 664.88, 4, 170.09, 3, 675.3, 2, 506.14, 1, 330.88,
      687.01, 20,
    ],
  },
]);

const apexChartOptions = ref({
  chart: {
    type: "area",
  },
  xaxis: {
    categories: [
      "2024",
      "2026",
      "2028",
      "2030",
      "2032",
      "2034",
      "2036",
      "2038",
      "2040",
      "2044",
      "2046",
      "2048",
      "2050",
      "2052",
      "2054",
    ],
  },
  yaxis: {
    categories: ["400000", "320000", "240000", "160000", "80000", "0"],
  },
  y1axis: {
    categories: ["400000", "320000", "240000", "160000", "80000", "0"],
  },
  stroke: {
    curve: "smooth",
  },
});

const pieData = ref();
const pieOptions = ref();

const chartData = ref();
const chartOptions = ref();

const graphData = ref();
const graphOptions = ref();

const props = defineProps({
  totalValue: Number,
});

onMounted(() => {
  pieData.value = setPieData();
  pieOptions.value = setPieOptions();

  chartData.value = setChartData();
  chartOptions.value = setChartOptions();

  graphData.value = setGraphData();
  graphOptions.value = setGraphOptions();
});

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: [
      "Down Payment & One-time Expenses",
      "Principal",
      "Interest",
      "Extra Payments",
      "Home insurance",
      "Property taxes",
      "HOA fees",
      "PMI (until February 12, 2031)",
    ],
    datasets: [
      {
        label: "Down Payment & One-time Expenses",
        backgroundColor: [
          "#A4B0BE",
          "#0F182D",
          "#FF7F50",
          "#70A1FF",
          "#7BED9F",
          "#FF6B81",
          "#ECCC68",
          "#5352ED",
        ],
        hoverBorderColor: [
          "#b4bfca",
          "#335299",
          "#ffc7b3",
          "#b3cdff",
          "#bcf6ce",
          "#ffb3be",
          "#f7e8bb",
          "#babaf8",
        ],
        hoverBorderWidth: 3,
        barThickness: 50,
        order: 8,
        hoverOffset: 20,
        // data: setPieMap.value.map((x) => x.values),
        data: [1500, 8800, 8206.51, 600, 1050, 3751.2, 800, 366.43],
      },
      // {
      //   label: "Principal",
      //   backgroundColor: documentStyle.getPropertyValue("--gray-500"),
      //   borderColor: documentStyle.getPropertyValue("--gray-500"),
      //   barThickness: 50,
      //   data: [8800],
      // },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    indexAxis: "y",
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        // ticks: {
        //   color: textColorSecondary,
        //   font: {
        //     weight: 500,
        //   },
        // },
        // grid: {
        //   display: false,
        //   drawBorder: false,
        // },
        display: false,
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#000",
          fontSize: 80,
          display: false,
        },
        grid: {
          color: surfaceBorder,
          display: false,
          drawBorder: true,
        },
        display: false,
      },
    },
  };
};

const setGraphData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: [
      "2024",
      "2026",
      "2028",
      "2030",
      "2032",
      "2034",
      "2036",
      "2038",
      "2040",
      "2044",
      "2046",
      "2048",
      "2050",
      "2052",
      "2054",
    ],
    datasets: [
      {
        label: "First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        tension: 0.4,
        showLine: true,
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        borderColor: documentStyle.getPropertyValue("--cyan-500"),
        backgroundColor: "rgba(88, 89, 91, 0.61)",
      },
      {
        label: "Second Dataset",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,
        borderDash: [5, 5],
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        borderColor: documentStyle.getPropertyValue("--orange-500"),
        backgroundColor: "rgba(96, 159, 243, 0.45)",
      },
      {
        label: "Third Dataset",
        data: [12, 51, 62, 33, 21, 62, 45],
        showLine: true,
        fill: true,
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        borderColor: documentStyle.getPropertyValue("--gray-500"),
        tension: 0.4,
        backgroundColor: "rgba(212, 190, 192, 0.65)",
      },
    ],
  };
};

let hoverX = null;
let hoverY = null;

const handleMouseMove = (event) => {
  const chart = chartRef.value.chart;
  const canvas = chart.canvas;
  const rect = canvas.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  const activePoint = chart.getElementsAtXAxis(event)[0];
  if (activePoint) {
    const dataset = activePoint.dataset;
    const index = activePoint.index;
    const xValue = chart.data.labels[index];
    const yValue = dataset.data[index];

    hoverX = offsetX;
    hoverY = offsetY;
    drawLine(xValue, yValue);
  } else {
    hoverX = null;
    hoverY = null;
    drawLine();
  }
};

const handleMouseLeave = () => {
  hoverX = null;
  hoverY = null;
  drawLine();
};

const drawLine = (xValue = null, yValue = null) => {
  const chart = chartRef.value.chart;
  const ctx = chart.ctx;

  ctx.save();
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  if (xValue !== null && yValue !== null) {
    ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.moveTo(hoverX, 0);
    ctx.lineTo(hoverX, ctx.canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, hoverY);
    ctx.lineTo(ctx.canvas.width, hoverY);
    ctx.stroke();

    ctx.fillStyle = "#000";
    ctx.fillText(`X: ${xValue}`, hoverX + 5, hoverY - 5);
    ctx.fillText(`Y: ${yValue}`, hoverX + 5, hoverY + 10);
  }
  ctx.restore();
};

const setGraphOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    stacked: false,
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
        labels: {
          color: textColor,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};

const monthlyInterestRate = ref();

monthlyInterestRate.value =
  useCalculationsStore().fianceProperty.monthlyInterestRate;

const setPieMap = ref([
  {
    label: "Principal & Interest",
    // values: 2654,
    values: useCalculationsStore().fianceProperty.monthlyInterestRate,
  },
  {
    label: "Extra Payments",
    // values: 200,
    values: useCalculationsStore().fianceProperty.extraPayments,
  },
  {
    label: "Home Insurance",
    // values: 400,
    values: useCalculationsStore().fianceProperty.homeInsuranceMonthly,
  },
  {
    label: "Property Tax",
    // values: 400,
    values: useCalculationsStore().fianceProperty.propertyTaxMonthly,
  },
  {
    label: "HOA Fees",
    // values: 200,
    values: useCalculationsStore().fianceProperty.hoaFees,
  },
  {
    label: "PMI",
    // values: 300,
    values: useCalculationsStore().fianceProperty.pmiMonthly,
  },
]);

const setPieData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: setPieMap.value.map((x) => x.label),
    datasets: [
      {
        data: setPieMap.value.map((x) => x.values),
        backgroundColor: [
          documentStyle.getPropertyValue("--surface-900"),
          documentStyle.getPropertyValue("--blue-500"),
          documentStyle.getPropertyValue("--green-500"),
          documentStyle.getPropertyValue("--pink-600"),
          documentStyle.getPropertyValue("--yellow-500"),
          documentStyle.getPropertyValue("--indigo-600"),
        ],

        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--surface-700"),
          documentStyle.getPropertyValue("--blue-200"),
          documentStyle.getPropertyValue("--green-300"),
          documentStyle.getPropertyValue("--pink-400"),
          documentStyle.getPropertyValue("--yellow-300"),
          documentStyle.getPropertyValue("--indigo-400"),
        ],
        hoverBorderColor: [
          documentStyle.getPropertyValue("--surface-500"),
          documentStyle.getPropertyValue("--blue-100"),
          documentStyle.getPropertyValue("--green-100"),
          documentStyle.getPropertyValue("--pink-200"),
          documentStyle.getPropertyValue("--yellow-100"),
          documentStyle.getPropertyValue("--indigo-200"),
        ],
        hoverBorderWidth: 7,
        hoverOffset: 20,
      },
    ],
  };
};

const setPieOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");

  return {
    plugins: {
      responsive: true,
      legend: {
        display: false,
        labels: {
          cutout: "60%",
          color: textColor,
        },
      },
    },
  };
};

const plugins = [
  {
    beforeDraw(chart) {
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;

      ctx.restore();
      const fontSize = (height / 350).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      const text = `$${useCalculationsStore().getCalculations}`;
      const text2 = `Montly Payment`;
      const textX1 = Math.round((width - ctx.measureText(text).width) / 2);
      const textX2 = Math.round((width - ctx.measureText(text2).width) / 1.55);
      const textY = height / 2;

      ctx.font = "bold " + ctx.font;
      ctx.fillText(text, textX1 - 5, textY);
      ctx.font = fontSize + "em sans-serif";
      ctx.fillText(text2, textX2 - 60, textY + 35);
      ctx.save();
    },
  },
];
</script>
<style scoped>
/* Style for the tooltip */
.tooltip {
  position: relative;
  display: inline-block;
  text-align: center;
}

/* Style for the tooltip content */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  bottom: 170%;
  z-index: 1;
  width: 425px;
  left: 50%;
  font-size: medium;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 50s;
}

/* Show the tooltip content on hover */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltip .arrow {
  position: absolute;
  bottom: -16px;
  /* Adjust the position of the arrow */
  left: 50%;
  border-width: 8px;
  border-style: solid;
  border-color: black transparent transparent transparent;
  transform: translateX(-50%);
}
</style>
