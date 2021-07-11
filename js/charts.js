var xValues = [
  "11 Jun",
  "12 Jun",
  "13 Jun",
  "14 Jun",
  "15 Jun",
  "16 Jun",
  "17 Jun",
  "18 Jun",
  "19 Jun",
  "20 Jun",
  "21 Jun",
  "22 Jun",
  "23 Jun",
  "24 Jun",
  "25 Jun",
  "26 Jun",
  "27 Jun",
  "28 Jun",
  "29 Jun",
  "30 Jun",
  "1 Jul",
  "2 Jul",
  "3 Jul",
  "4 Jul",
  "5 Jul",
  "6 Jul",
  "7 Jul",
  "8 Jul",
  "9 Jul",
  "10 Jul",
];

// Chart.defaults.global.defaultFontSize = 18;

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "Total",
        data: [
          3438910, 2889130, 3487511, 3406734, 3565092, 3621139, 1623268,
          3996678, 2952488, 3512940, 3418777, 3414326, 3882071, 3185051,
          8873071, 6069982, 6930775, 6534329, 6375669, 6733256, 1937717,
          5362837, 3849093, 2868201, 4359597, 4533848, 6606954, 1712225,
          4646042, 3780660,
        ],
        borderColor: "red",
        fill: false,        
      },
      {
        label: "Dose 1",
        data: [
          3108893, 2569355, 3166173, 3078177, 3230118, 3229589, 1497948,
          3569310, 2541998, 3128913, 2999256, 3012255, 3360034, 2894811,
          8077099, 5396709, 6259364, 5712000, 5478120, 5570883, 1584055,
          4195851, 2906435, 2094957, 3355197, 3290136, 4394503, 1223466,
          2838325, 2544057,
        ],
        borderColor: "green",
        fill: false,
      },
      {
        label: "Dose 2",
        data: [
          330097, 319775, 321338, 328557, 334974, 391550, 125320, 427368,
          410490, 384027, 419521, 402071, 522037, 290240, 795972, 673273,
          671411, 822329, 897549, 1162373, 353662, 1166986, 942658, 773244,
          1004400, 1243712, 2212451, 488759, 1807717, 1236603,
        ],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: true },
    responsive: true,
  },
});

//Chart.defaults.global.defaultFontSize = 16;


var xValues = ["18-44", "45-60", "60+"];
var yValues = [55, 49, 44];
var barColors = ["#b91d47", "#00aba9", "#2b5797"];

new Chart("agechart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Vaccination by Age",
      font: { size: 14 },
    },
  },
});

var xValues = ["Covishield", "Covaxin", "Sputnik V"];
var yValues = [324724123, 46016442, 179772];
var barColors = ["#59D3BD", "#00aba9", "#2b5797"];

new Chart("typechart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Vaccination by Age",
      font: { size: 14 },
    },
  },
});
