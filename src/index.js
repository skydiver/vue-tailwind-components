import BaseContainer from './Containers/BaseContainer.vue';
import Box from './Containers/Box.vue';

import Button3D from './Widgets/Buttons/Button3D.vue';
import ButtonOutline from './Widgets/Buttons/ButtonOutline.vue';
import ButtonPill from './Widgets/Buttons/ButtonPill.vue';
import ButtonSimple from './Widgets/Buttons/ButtonSimple.vue';

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

    // Buttons
    Vue.component('vt-button-3d', Button3D);
    Vue.component('vt-button-outline', ButtonOutline);
    Vue.component('vt-button-pill', ButtonPill);
    Vue.component('vt-button-simple', ButtonSimple);

    // Widgets
    Vue.component('vt-metric-card', MetricCard);
    Vue.component('vt-page-header', PageHeader);

    // Charts
    Vue.component('vt-chart-bar', BarChart);
    Vue.component('vt-chart-doughnut', DoughnutChart);
    Vue.component('vt-chart-line', LineChart);
  }
};
