import {FormControlLabel, RadioProps, Stack} from '@mui/material';
import type {Decorator, Meta, StoryObj} from '@storybook/react';

import {Radio} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI kit/Radio',
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Initial: Story = {
  args: {},
};

export const InitialActive: Story = {
  args: {
    defaultChecked: true,
  },
};

export const DisabledActive: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

const formControlLabelWrapper: Decorator<RadioProps> = (Story, {args}) => {
  const {disabled} = args;

  return (
    <FormControlLabel control={<Story />} label="Label" disabled={disabled} />
  );
};

export const InitialWithLabel: Story = {
  ...Initial,
  decorators: [formControlLabelWrapper],
};

export const InitialActiveWithLabel: Story = {
  ...InitialActive,
  decorators: [formControlLabelWrapper],
};

export const DisabledActiveWithLabel: Story = {
  ...DisabledActive,
  decorators: [formControlLabelWrapper],
};

export const DisabledWithLabel: Story = {
  ...Disabled,
  decorators: [formControlLabelWrapper],
};

export const AllWithoutLabel = () => (
  <>
    <Radio {...Initial.args} />
    <Radio {...InitialActive.args} />
    <Radio {...DisabledActive.args} />
    <Radio {...Disabled.args} />
  </>
);

export const AllWithLabel = () => (
  <Stack spacing={1}>
    <FormControlLabel control={<Radio />} label="Unchecked" />
    <FormControlLabel control={<Radio defaultChecked />} label="Checked" />
    <FormControlLabel
      control={<Radio defaultChecked disabled />}
      label="Checked disabled"
      disabled
    />
    <FormControlLabel
      control={<Radio disabled />}
      label="Unchecked disabled"
      disabled
    />
  </Stack>
);
