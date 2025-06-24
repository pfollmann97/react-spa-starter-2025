import {Button, Stack} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'UI kit/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="subtle">Subtle Primary</Button>
      <Button variant="subtle" color="inherit">
        Subtle Black
      </Button>
      <Button variant="subtle" color="error">
        Subtle Error
      </Button>
      <Button variant="text" color="secondary">
        Text Secondary
      </Button>
    </Stack>
  ),
};

export default meta;
