import { storiesOf } from '@storybook/vue';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/vue';

import ButtonSimple from '../src/Widgets/Buttons/ButtonSimple.vue';
import ButtonPill from '../src/Widgets/Buttons/ButtonPill.vue';

import tailwindColors from './tailwind-colors';

const componentProps = () => ({
  label: {
    default: text('Label', 'Sample Button')
  },
  backgroundColor: {
    default: select('Backg. color', Object.keys(tailwindColors), 'red')
  },
  hoverColor: {
    default: select('Hover color', Object.keys(tailwindColors), 'red-dark')
  },
  textColor: {
    default: select('Text color', Object.keys(tailwindColors), 'white')
  }
});

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('Simple', () => ({
  components: { 'vt-button-simple': ButtonSimple },
  template:
    '<vt-button-simple :label="label" :background-color="backgroundColor" :hover-color="hoverColor" :text-color="textColor" />',
  props: componentProps()
}));

stories.add('Pill', () => ({
  components: { 'vt-button-pill': ButtonPill },
  template:
    '<vt-button-pill :label="label" :background-color="backgroundColor" :hover-color="hoverColor" :text-color="textColor" />',
  props: componentProps()
}));
