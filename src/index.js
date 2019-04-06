import { BaseContainer, Box } from './Containers';
import { MetricCard, PageHeader } from './Widgets';
import { BarChart, DoughnutChart, LineChart } from './Charts';

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
