<template>
  <div class="">
    <div>
      <div class="flex flex-row items-center px-auto">
        <p class="font-bold text-[4rem] text-black mr-4">$</p>
        <p class="font-epilogue font-bold text-[5rem] text-black w-64">
          {{ props.totalValue }}
        </p>
        <div class="bg-slate-300 h-32 w-0.5 mx-8"></div>
        <p class="font-epilogue font-normal text-[19px] text-black">
          Your estimated Monthly payment
        </p>
      </div>
      <h1 class="uppercase font-cinzel font-extralight text-black text-[80px]">
        Payment Breakdown
      </h1>
      <div class="bg-slate-300 mx-8 h-0.5 w-full"></div>
      <div class="">
        <div class="flex flex-row">
          <div class="flex flex-row justify-center">
            <div class="">
              <div class="card flex">
                <Chart
                  type="doughnut"
                  :data="pieData"
                  :options="pieOptions"
                  class="w-[550px] "
                />
              </div>
              <div
                class="bg-gray-100 mt-6 rounded-xl px-4 w-72 mx-auto justify-center shadow-xl"
              >
                <div class="flex items-center">
                  <div
                    class="bg-[#0F172A] rounded-full h-3 w-3 top-3 mr-3"
                  ></div>
                  <p class="font-bold">Principal & Interest : $1653</p>
                </div>
                <div class="flex items-center px-0 mt-0">
                  <div
                    class="bg-[#609AF8] rounded-full h-3 w-3 top-3 mr-3"
                  ></div>
                  <p class="font-bold">Extra Payments : $0</p>
                </div>
                <div class="flex items-center px-0 mt-0">
                  <div
                    class="bg-[#76DB9B] rounded-full h-3 w-3 top-3 mr-3"
                  ></div>
                  <p class="font-bold">Home Insurance : $102</p>
                </div>
                <div class="flex items-center px-0 mt-0">
                  <div
                    class="bg-[#C93D82] rounded-full h-3 w-3 top-3 mr-3"
                  ></div>
                  <p class="font-bold">Property Taxes : $365</p>
                </div>
                <div class="flex items-center px-0 mt-0">
                  <div
                    class="bg-[#EAB308] rounded-full h-3 w-3 top-3 mr-3"
                  ></div>
                  <p class="font-bold">HOA Fees : $0</p>
                </div>
                <div class="flex items-center px-0 mt-0">
                  <div
                    class="bg-[#5457CD] rounded-full h-3 w-3 top-3 mr-3"
                  ></div>
                  <p class="font-bold">PMI : $160</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <h1
              class="uppercase font-cinzel font-extralight text-black text-[50px]"
            >
              Customize your mortgage payment
            </h1>
            <div class="bg-slate-300 mx-8 h-0.5 w-full"></div>
            <div class="flex items-center mt-4 justify-center">
              <div class="w-10">
                <div
                  class="h-6 w-6 bg-[#0F172A] mr-3 hover:h-8 hover:w-8 transition-all duration-200 cursor-pointer"
                ></div>
              </div>
              <div class="grid grid-cols-3 gap-20">
                <div class="col-span-1 text-center">
                  <p
                    class="font-epilogue font-normal text-[29px] text-black w-full"
                  >
                    Principal & Interest
                  </p>
                </div>
                <div class="col-span-1 text-right">
                  <p class="font-epilogue font-bold text-[29px] text-black">
                    $
                  </p>
                </div>
                <div class="col-span-1 text-right">
                  <p class="font-epilogue font-bold text-[29px] text-black">
                    1653.41
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
              <div class="grid grid-cols-3 gap-1">
                <div class="col-span-1 text-center">
                  <p
                    class="font-epilogue font-normal text-[29px] text-black w-full"
                  >
                    Monthly Extra Payment
                  </p>
                </div>
                <div class="col-span-1 text-right">
                  <p class="font-epilogue font-bold text-[29px] text-black">
                    $
                  </p>
                </div>
                <div class="col-span-1 text-right">
                  <p class="font-epilogue font-bold text-[29px] text-black">
                    1653.41
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-slate-300 mx-8 h-0.5 w-full"></div>
          </div>
        </div>
        <h1
          class="uppercase font-cinzel font-extralight text-black text-[80px]"
        >
          Total Of All Payments
        </h1>
        <div class="bg-slate-300 mx-8 h-0.5 w-full"></div>
        <div flex>
          <div class="card">
            <Chart
              type="bar"
              :data="chartData"
              :options="chartOptions"
              class="h-96"
            />
          </div>
        </div>
        <h1
          class="uppercase font-cinzel font-extralight text-black text-[80px]"
        >
          Amortization Schedule
        </h1>
        <div class="bg-slate-300 h-0.5 w-full"></div>
        <div>
          <div class="card my-8">
            <Chart
              type="line"
              :data="graphData"
              :options="graphOptions"
              class="h-96 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

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

const pieData = ref();
const pieOptions = ref(null);

const chartData = ref();
const chartOptions = ref();

const graphData = ref();
const graphOptions = ref();

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
        label: "My First dataset",
        backgroundColor: documentStyle.getPropertyValue("--cyan-500"),
        borderColor: documentStyle.getPropertyValue("--cyan-500"),
        data: [1500, 8800, 8206.51, 0, 1050, 3751.2, 0, 366.43],
      },
      // {
      //     label: 'My Second dataset',
      //     backgroundColor: documentStyle.getPropertyValue('--gray-500'),
      //     borderColor: documentStyle.getPropertyValue('--gray-500'),
      //     data: [28, 48, 40, 19, 86, 27, 90]
      // }
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
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500,
          },
        },
        grid: {
          display: true,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
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
        borderColor: documentStyle.getPropertyValue("--cyan-500"),
        backgroundColor: "rgba(99, 102, 241, 0.2)",
      },
      {
        label: "Second Dataset",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,
        borderDash: [5, 5],
        tension: 0.4,
        borderColor: documentStyle.getPropertyValue("--orange-500"),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
      },
      {
        label: "Third Dataset",
        data: [12, 51, 62, 33, 21, 62, 45],
        fill: true,
        borderColor: documentStyle.getPropertyValue("--gray-500"),
        tension: 0.4,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };
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
      legend: {
        labels: {
          color: textColor,
        },
      },
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

const setPieData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    // labels: ["A", "B", "C"],
    datasets: [
      {
        data: [1653, 0, 102, 365, 0, 160],
        backgroundColor: [
          documentStyle.getPropertyValue("--surface-900"),
          documentStyle.getPropertyValue("--blue-400"),
          documentStyle.getPropertyValue("--green-300"),
          documentStyle.getPropertyValue("--pink-600"),
          documentStyle.getPropertyValue("--yellow-500"),
          documentStyle.getPropertyValue("--indigo-600"),
        ],
        
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--surface-700"),
          documentStyle.getPropertyValue("--blue-200"),
          documentStyle.getPropertyValue("--green-100"),
          documentStyle.getPropertyValue("--pink-400"),
          documentStyle.getPropertyValue("--yellow-300"),
          documentStyle.getPropertyValue("--indigo-400"),
        ],
      },
    ],
  };
};

const setPieOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");

  return {
    plugins: {
      legend: {
        labels: {
          cutout: "60%",
          color: textColor,
        },
      },
    },
  };
};
</script>
<style scoped></style>
