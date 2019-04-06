import { BaseContainer, Box } from './Containers';
import { MetricCard, PageHeader } from './Widgets';

export default {
  install(Vue) {
    // Containers
    Vue.component('vt-base-container', BaseContainer);
    Vue.component('vt-box', Box);

    // Widgets
    Vue.component('vt-metric-card', MetricCard);
    Vue.component('vt-page-header', PageHeader);
  }
};
