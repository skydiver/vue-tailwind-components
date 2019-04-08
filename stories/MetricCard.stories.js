import { storiesOf } from '@storybook/vue';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from 'storybook-addon-vue-info';
import centered from '@storybook/addon-centered/vue';

import MetricCard from '../src/Widgets/MetricCard.vue';

import tailwindColors from './tailwind-colors';
const colors = Object.keys(tailwindColors);

const stories = storiesOf('Widgets', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
stories.addDecorator(centered);

stories.add(
  'Metric Card',
  () => ({
    components: { 'vt-metric-card': MetricCard },
    template: `
      <vt-metric-card
        :title="title"
        :value="value"
        :card-color="cardColor"
        :card-border-color="cardBorderColor"
        :icon="icon"
        :icon-color="iconColor"
        :arrow="arrow"
        :arrow-color="arrowColor"
        style="width: 400px"
      />
    `,
    props: {
      title: {
        default: text('Title', 'Total Revenue')
      },
      value: {
        default: text('Value', '$3249')
      },
      cardColor: {
        default: select('Card color', colors, 'green-lightest')
      },
      cardBorderColor: {
        default: select('Border color', colors, 'green-dark')
      },
      icon: {
        default: text('FA Icon', 'fa-wallet')
      },
      iconColor: {
        default: select('Icon color', colors, 'green-dark')
      },
      arrow: {
        default: select('Arrow type', ['up', 'down', 'equal'], 'up')
      },
      arrowColor: {
        default: select('Arrow color', colors, 'green')
      }
    }
  }),
  {
    info: true
  }
);
