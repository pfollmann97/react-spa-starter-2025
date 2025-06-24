import {Button} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'UI kit/Button/Contained',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {
  args: {
    children: 'Button',
  },
};

export const Hover: Story = {
  args: {
    children: 'Hovered',
  },
  parameters: {
    pseudo: {hover: true},
  },
};

export const FocusVisible: Story = {
  args: {
    children: 'focus-visible',
  },
  parameters: {
    pseudo: {focusVisible: true},
  },
};

export const Active: Story = {
  args: {
    children: 'Active',
  },
  parameters: {
    pseudo: {active: true},
  },
};

export const Loading: Story = {
  render: () => <Button loading>Загрузка...</Button>,
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
