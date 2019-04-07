import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/vue';

import PageHeader from '../src/Widgets/PageHeader.vue';

const stories = storiesOf('Widgets', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add(
  'Page Header',
  () => ({
    components: { 'vt-page-header': PageHeader },
    template: `
      <vt-page-header
        :title="title"
        style="width: 800px"
      />
    `,
    props: {
      title: {
        default: text('Title', 'Page Header Title')
      }
    }
  }),
  {
    info: true
  }
);
