import {CheckboxProps, FormControlLabel, Stack} from '@mui/material';
import type {Decorator, Meta, StoryObj} from '@storybook/react';

import {Checkbox} from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI kit/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

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

const formControlLabelWrapper: Decorator<CheckboxProps> = (Story, {args}) => {
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
    <Checkbox {...Initial.args} />
    <Checkbox {...InitialActive.args} />
    <Checkbox {...DisabledActive.args} />
    <Checkbox {...Disabled.args} />
  </>
);

export const AllWithLabel = () => (
  <Stack spacing={1}>
    <FormControlLabel control={<Checkbox />} label="Unchecked" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
    <FormControlLabel
      control={<Checkbox defaultChecked disabled />}
      label="Checked disabled"
      disabled
    />
    <FormControlLabel
      control={<Checkbox disabled />}
      label="Unchecked disabled"
      disabled
    />
  </Stack>
);
