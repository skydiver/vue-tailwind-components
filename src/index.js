import { BaseContainer, Box } from './Containers';

export default {
  install(Vue) {
    Vue.component('vt-base-container', BaseContainer);
    Vue.component('vt-box', Box);
  }
};
