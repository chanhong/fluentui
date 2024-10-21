import { Collapse } from '@fluentui/react-motion-components-preview';
import CollapseDescription from './CollapseDescription.md';

export { Default } from './CollapseDefault.stories';
export { Horizontal } from './CollapseHorizontal.stories';
export { Snappy } from './CollapseSnappy.stories';
export { Exaggerated } from './CollapseExaggerated.stories';
export { Customization } from './CollapseCustomization.stories';
export { Delayed } from './CollapseDelayed.stories';

export default {
  title: 'Motion/Components (preview)/Collapse',
  component: Collapse,
  parameters: {
    docs: {
      description: {
        component: CollapseDescription,
      },
    },
  },
};
