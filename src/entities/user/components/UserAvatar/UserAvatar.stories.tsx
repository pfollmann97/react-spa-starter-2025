import type {Meta, StoryObj} from '@storybook/react';

import {UserAvatar} from './index';

const meta = {
  title: 'Users/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhotoProvided: Story = {
  args: {
    name: 'Прудников Иван',
    photoUrl: 'https://i.pravatar.cc/150?img=4',
  },
};

export const NoPhotoLastFirstName: Story = {
  args: {
    name: 'Прудников Иван',
    photoUrl: '',
  },
};

export const NoPhotoSize24: Story = {
  args: {
    name: 'Прудников Иван',
    photoUrl: '',
    size: 24,
  },
};

export const NoPhotoSize42: Story = {
  args: {
    name: 'Прудников Иван',
    photoUrl: '',
    size: 42,
  },
};

export const NoPhotoSize106: Story = {
  args: {
    name: 'Прудников Иван',
    photoUrl: '',
    size: 106,
  },
};

export const NoPhotoLastFirstMiddleName: Story = {
  args: {
    name: 'Прудников Иван Алексеевич',
    photoUrl: '',
  },
};

export const NoPhotoOnlyLastName: Story = {
  args: {
    name: 'Прудников',
    photoUrl: '',
  },
};

export const NoPhotoEmptyName: Story = {
  args: {
    name: '',
    photoUrl: '',
  },
};

export const CustomBackground: Story = {
  args: {
    name: 'Прудников Иван Алексеевич',
    photoUrl: '',
    bgColor: '#ef6f6f',
  },
};
