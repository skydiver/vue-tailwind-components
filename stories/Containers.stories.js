import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/vue';

import Box from '../src/Containers/Box.vue';

const stories = storiesOf('Containers', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add(
  'Box',
  () => ({
    components: { 'vt-box': Box },
    template: `
      <vt-box :title="title">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, a! A culpa, incidunt magnam, ipsam quas aperiam id vero possimus architecto et nobis nisi, aliquid necessitatibus soluta dolorum non nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, a! A culpa, incidunt magnam, ipsam quas aperiam id vero possimus architecto et nobis nisi, aliquid necessitatibus soluta dolorum non nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, a! A culpa, incidunt magnam, ipsam quas aperiam id vero possimus architecto et nobis nisi, aliquid necessitatibus soluta dolorum non nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, a! A culpa, incidunt magnam, ipsam quas aperiam id vero possimus architecto et nobis nisi, aliquid necessitatibus soluta dolorum non nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, a! A culpa, incidunt magnam, ipsam quas aperiam id vero possimus architecto et nobis nisi, aliquid necessitatibus soluta dolorum non nihil.</p>
      </vt-box>
    `,
    props: {
      title: {
        default: text('Box title', 'Box Title')
      }
    }
  }),
  {
    info: true
  }
);
