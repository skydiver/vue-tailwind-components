import BaseContainer from './Containers/BaseContainer.vue';
import Box from './Containers/Box.vue';

import MetricCard from './Widgets/MetricCard.vue';
import PageHeader from './Widgets/PageHeader.vue';

import BarChart from './Charts/BarChart.vue';
import DoughnutChart from './Charts/DoughnutChart.vue';
import LineChart from './Charts/LineChart.vue';

export default {
  install(Vue) {
    // Containers
    Vue.component('vt-base-container', BaseContainer);
    Vue.component('vt-box', Box);

    // Widgets
    Vue.component('vt-metric-card', MetricCard);
    Vue.component('vt-page-header', PageHeader);

    // Charts
    Vue.component('vt-chart-bar', BarChart);
    Vue.component('vt-chart-doughnut', DoughnutChart);
    Vue.component('vt-chart-line', LineChart);
  }
};
