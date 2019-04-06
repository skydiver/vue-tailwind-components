import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/vue';

import ButtonSimple from '../src/Widgets/Buttons/ButtonSimple.vue';
import ButtonPill from '../src/Widgets/Buttons/ButtonPill.vue';

const componentProps = () => ({
  label: {
    default: text('Label', 'Sample Button')
  },
  backgroundColor: {
    default: text('Backg. color', 'red')
  },
  hoverColor: {
    default: text('Hover color', 'red-dark')
  },
  textColor: {
    default: text('Text color', 'white')
  }
});

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('Simple', () => ({
  components: { 'vt-button-simple': ButtonSimple },
  template:
    '<vt-button-simple :label="label" :background-color="backgroundColor" :hover-color="hoverColor" text-color="white" />',
  props: componentProps()
}));

stories.add('Pill', () => ({
  components: { 'vt-button-pill': ButtonPill },
  template:
    '<vt-button-pill :label="label" :background-color="backgroundColor" :hover-color="hoverColor" text-color="white" />',
  props: componentProps()
}));
