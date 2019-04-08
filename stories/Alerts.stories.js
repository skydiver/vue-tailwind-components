import { storiesOf } from '@storybook/vue';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from 'storybook-addon-vue-info';
import centered from '@storybook/addon-centered/vue';

import Simple from '../src/Alerts/Simple.vue';
import Border from '../src/Alerts/Border.vue';
import Titled from '../src/Alerts/Titled.vue';
import WithIcon from '../src/Alerts/WithIcon.vue';

const alertContent =
  '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, a! A culpa, incidunt magnam, ipsam quas aperiam id vero possimus architecto et nobis nisi, aliquid necessitatibus soluta dolorum non nihil.</p>';

const alertProps = () => ({
  title: {
    default: text('Title', 'Alert Title')
  },
  type: {
    default: select(
      'Alert type',
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
  'Simple',
  () => ({
    components: { 'vt-alert-simple': Simple },
    template: `<vt-alert-simple :title="title" :type="type">Important Message!</vt-alert-simple>`,
    props: alertProps()
  }),
  {
    info: true
  }
);

stories.add(
  'Left Border',
  () => ({
    components: { 'vt-alert-border': Border },
    template: `<vt-alert-border :title="title" :type="type">Used to display important messages.</vt-alert-simple>`,
    props: alertProps()
  }),
  {
    info: true
  }
);
stories.add(
  'Titled',
  () => ({
    components: { 'vt-alert-titled': Titled },
    template: `<vt-alert-titled :title="title" :type="type">Used to display important messages.</vt-alert-simple>`,
    props: alertProps()
  }),
  {
    info: true
  }
);

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
