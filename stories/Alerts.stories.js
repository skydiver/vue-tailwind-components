import { storiesOf } from '@storybook/vue';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from 'storybook-addon-vue-info';
import centered from '@storybook/addon-centered/vue';

import WithIcon from '../src/Alerts/WithIcon.vue';

const alertContent =
  '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, a! A culpa, incidunt magnam, ipsam quas aperiam id vero possimus architecto et nobis nisi, aliquid necessitatibus soluta dolorum non nihil.</p>';

const alertProps = () => ({
  title: {
    default: text('Title', 'Alert Title')
  },
  type: {
    default: select(
      'Arrow type',
      ['warning', 'info', 'success', 'error'],
      'success'
    )
  }
});

const stories = storiesOf('Alerts', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
stories.addDecorator(centered);

stories.add(
  'with Icon',
  () => ({
    components: { 'vt-alert-icon': WithIcon },
    template: `<vt-alert-icon :title="title" :type="type">${alertContent}</vt-alert-icon>`,
    props: alertProps()
  }),
  {
    info: true
  }
);
