import {Button} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

// Want particular order
// eslint-disable-next-line simple-import-sort/exports
export {
  Initial,
  Hover,
  FocusVisible,
  Active,
  Disabled,
} from './ButtonContained.stories';

const meta = {
  title: 'UI kit/Button/Outlined',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    variant: 'outlined',
  },
} satisfies Meta<typeof Button>;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  render: () => (
    <Button variant="outlined" loading>
      Загрузка...
    </Button>
  ),
};

export default meta;
