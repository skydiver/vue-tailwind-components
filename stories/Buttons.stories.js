import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ButtonSimple from '../src/Widgets/Buttons/ButtonSimple.vue';

storiesOf('Buttons', module).add('Simple', () => ({
  components: { 'vt-button-simple': ButtonSimple },
  template: '<vt-button-simple labe="Simple Button" />'
}));
