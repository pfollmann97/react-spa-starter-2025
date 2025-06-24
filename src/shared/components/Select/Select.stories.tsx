// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {Box, MenuItem} from '@mui/material';
import type {Meta} from '@storybook/react';

import {FireIcon} from '../../icons';
import {Select, SelectOption} from './index';

import {COLOR__LINE, COLOR__WARNING} from '@/theme/colors';

const meta = {
  title: 'UI kit/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;

interface DummyUser {
  id: number;
  name: string;
}

const dummyUsers: DummyUser[] = [
  {
    id: 0,
    name: 'Петров',
  },
  {
    id: 1,
    name: 'Иванов',
  },
  {
    id: 2,
    name: 'Сидоров',
  },
];

const dummyUserOptions = dummyUsers.map(({id, name}) => ({
  label: name,
  value: id,
}));

export const MinimalWithoutLabel = {
  render: () => {
    const [userId, setUserId] = useState(1);

    return (
      <Select
        options={dummyUserOptions}
        value={userId}
        onChange={val => {
          setUserId(val as number);
        }}
      />
    );
  },
};

export const WithLabel = {
  render: () => {
    const [userId, setUserId] = useState(1);

    return (
      <Select
        label="Исполнитель"
        options={dummyUserOptions}
        value={userId}
        onChange={val => {
          setUserId(val as number);
        }}
      />
    );
  },
};

export const Disabled = {
  render: () => {
    const [userId, setUserId] = useState(1);

    return (
      <Select
        label="Исполнитель"
        disabled
        options={dummyUserOptions}
        value={userId}
        onChange={val => {
          setUserId(val as number);
        }}
      />
    );
  },
};

export const InputPlaceholder = {
  render: () => {
    const [userId, setUserId] = useState<number | null>(null);

    return (
      <Select
        label="Исполнитель"
        inputPlaceholder="Выберите исполнителя"
        options={dummyUserOptions}
        value={userId}
        onChange={val => {
          setUserId(val as number | null);
        }}
      />
    );
  },
};

export const SizeSmall = {
  render: () => {
    const [userId, setUserId] = useState<number | null>(null);

    return (
      <Select
        label="Исполнитель"
        inputPlaceholder="Выберите исполнителя"
        options={dummyUserOptions}
        value={userId}
        onChange={val => {
          setUserId(val as number | null);
        }}
        size="small"
      />
    );
  },
};

export const CustomRenderOption = {
  render: () => {
    const priorities = [
      {
        label: 'Низкий',
        value: 1,
      },
      {
        label: 'Средний',
        value: 2,
      },
      {
        label: 'Высокий',
        value: 3,
      },
    ];
    const [selectedPriority, setSelectedPriority] = useState<number>(1);

    return (
      <Select
        label="Приоритет"
        options={priorities}
        value={selectedPriority}
        onChange={val => {
          setSelectedPriority(val as number);
        }}
        renderOption={({label, value}: SelectOption) => (
          <MenuItem key={value} value={value}>
            <Box display="flex" alignItems="center" gap={1}>
              <div style={{minWidth: '6ch'}}>{label}</div>
              {priorities.map(({value: priorityValue}) => {
                return (
                  <FireIcon
                    key={priorityValue}
                    sx={{
                      color:
                        priorityValue <= (value as number)
                          ? COLOR__WARNING
                          : COLOR__LINE,
                    }}
                  />
                );
              })}
            </Box>
          </MenuItem>
        )}
      />
    );
  },
};
