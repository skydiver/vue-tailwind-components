import { configure, addDecorator } from '@storybook/vue';
import { withInfo, setDefaults } from 'storybook-addon-vue-info';

addDecorator(withInfo);

const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
