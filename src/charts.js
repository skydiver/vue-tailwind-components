import BarChart from './Charts/BarChart.vue';
import DoughnutChart from './Charts/DoughnutChart.vue';
import LineChart from './Charts/LineChart.vue';

export default {
  install(Vue) {
    // Charts
    Vue.component('vt-chart-bar', BarChart);
    Vue.component('vt-chart-doughnut', DoughnutChart);
    Vue.component('vt-chart-line', LineChart);
  }
};
