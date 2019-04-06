import { storiesOf } from '@storybook/vue';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from 'storybook-addon-vue-info';
import centered from '@storybook/addon-centered/vue';

import ButtonSimple from '../src/Widgets/Buttons/ButtonSimple.vue';
import ButtonPill from '../src/Widgets/Buttons/ButtonPill.vue';
import ButtonOutline from '../src/Widgets/Buttons/ButtonOutline.vue';
import Button3D from '../src/Widgets/Buttons/Button3D.vue';

import tailwindColors from './tailwind-colors';

const baseButtonProps = () => ({
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
stories.addDecorator(withInfo);
stories.addDecorator(centered);

stories.add(
  'Simple',
  () => ({
    components: { 'vt-button-simple': ButtonSimple },
    template:
      '<vt-button-simple :label="label" :background-color="backgroundColor" :hover-color="hoverColor" :text-color="textColor" />',
    props: baseButtonProps()
  }),
  {
    info: true
  }
);

stories.add(
  'Pill',
  () => ({
    components: { 'vt-button-pill': ButtonPill },
    template:
      '<vt-button-pill :label="label" :background-color="backgroundColor" :hover-color="hoverColor" :text-color="textColor" />',
    props: baseButtonProps()
  }),
  {
    info: true
  }
);

stories.add(
  'Outline',
  () => ({
    components: { 'vt-button-outline': ButtonOutline },
    template:
      '<vt-button-outline :label="label" :hover-color="hoverColor" :text-hover-color="textHoverColor" :text-color="textColor" />',
    props: {
      label: {
        default: text('Label', 'Sample Button')
      },
      hoverColor: {
        default: select('Hover color', Object.keys(tailwindColors), 'red')
      },
      textHoverColor: {
        default: select('Text hov. color', Object.keys(tailwindColors), 'white')
      },
      textColor: {
        default: select('Text color', Object.keys(tailwindColors), 'red-dark')
      }
    }
  }),
  {
    info: true
  }
);

stories.add(
  '3D',
  () => ({
    components: { 'vt-button-3d': Button3D },
    template:
      '<vt-button-3d :label="label" :background-color="backgroundColor" :hover-color="hoverColor" :text-color="textColor" :border-color="borderColor" />',
    props: {
      label: {
        default: text('Label', 'Sample Button')
      },
      backgroundColor: {
        default: select('Backg. color', Object.keys(tailwindColors), 'red')
      },
      borderColor: {
        default: select('Border color', Object.keys(tailwindColors), 'red-dark')
      },
      hoverColor: {
        default: select('Hover color', Object.keys(tailwindColors), 'red-light')
      },
      textColor: {
        default: select('Text color', Object.keys(tailwindColors), 'white')
      }
    }
  }),
  {
    info: true
  }
);
