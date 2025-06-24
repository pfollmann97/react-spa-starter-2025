// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';
import {MenuItem} from '@mui/material';
import type {Meta} from '@storybook/react';

import {ObjectSelect} from './index';

const meta = {
  title: 'UI kit/ObjectSelect',
  component: ObjectSelect,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ObjectSelect>;

export default meta;
// type Story = StoryObj<typeof meta>;

////////////////////////////////////////////////////////////////////////////////

interface MyUserType {
  id: number;
  uuid: number;
  name: string;
  login: string;
}

const options: MyUserType[] = [
  {
    id: 1,
    uuid: 11,
    name: 'Alexey',
    login: 'aza',
  },
  {
    id: 2,
    uuid: 12,
    name: 'Vadim',
    login: 'vad',
  },
  {
    id: 3,
    uuid: 13,
    name: 'Anton',
    login: 'ant',
  },
];

const initialUser = options.find(opt => opt.id === 3) as MyUserType;

export const SingleSelectionInitiallyDefined = {
  render: () => {
    const [user, setUser] = useState<MyUserType | null>(initialUser);

    return (
      <>
        <ObjectSelect
          labelProp="login"
          options={options}
          value={user}
          valueProp="uuid"
          onChange={newUser => {
            setUser(newUser as MyUserType);
          }}
          sx={{mb: 2}}
        />

        <div>value: {JSON.stringify(user, null, 2)}</div>
      </>
    );
  },
};

export const SingleSelectionInitiallyUndefined = {
  render: () => {
    const [user, setUser] = useState<MyUserType | null>(null);

    return (
      <>
        <ObjectSelect
          labelProp="name"
          options={options}
          value={user}
          valueProp="id"
          onChange={newUser => {
            setUser(newUser as MyUserType);
          }}
          sx={{mb: 2}}
        />

        <div>value: {JSON.stringify(user, null, 2)}</div>
      </>
    );
  },
};

export const MultipleSelectionInitiallyEmpty = {
  render: () => {
    const [users, setUsers] = useState<MyUserType[]>([]);

    return (
      <>
        <ObjectSelect
          labelProp="name"
          multiple
          options={options}
          value={users}
          valueProp="id"
          onChange={newUsers => {
            setUsers(newUsers as MyUserType[]);
          }}
          sx={{mb: 2}}
        />

        <div>value: {JSON.stringify(users, null, 2)}</div>
      </>
    );
  },
};

export const MultipleSelectionInitiallyFilledIn = {
  render: () => {
    const [users, setUsers] = useState<MyUserType[]>([
      options[0]!,
      options[1]!,
    ]);

    return (
      <>
        <ObjectSelect
          labelProp="name"
          multiple
          options={options}
          value={users}
          valueProp="id"
          onChange={newUsers => {
            setUsers(newUsers as MyUserType[]);
          }}
          sx={{mb: 2}}
        />

        <div>value: {JSON.stringify(users, null, 2)}</div>
      </>
    );
  },
};

export const WithLabel = {
  render: () => {
    const [user, setUser] = useState<MyUserType | null>(initialUser);

    return (
      <>
        <ObjectSelect
          label="Пользователь"
          labelProp="login"
          options={options}
          value={user}
          valueProp="uuid"
          onChange={newUser => {
            setUser(newUser as MyUserType);
          }}
          sx={{mb: 2}}
        />

        <div>value: {JSON.stringify(user, null, 2)}</div>
      </>
    );
  },
};

export const ErrorWithLabel = {
  render: () => {
    const [user, setUser] = useState<MyUserType | null>(initialUser);

    return (
      <>
        <ObjectSelect
          label="Пользователь"
          labelProp="login"
          options={options}
          value={user}
          valueProp="uuid"
          onChange={newUser => {
            setUser(newUser as MyUserType);
          }}
          error="Обязательное поле"
          sx={{mb: 2}}
        />

        <div>value: {JSON.stringify(user, null, 2)}</div>
      </>
    );
  },
};

export const RenderOption = {
  render: () => {
    const [user, setUser] = useState<MyUserType | null>(null);

    return (
      <>
        <ObjectSelect
          labelProp="name"
          options={options}
          value={user}
          valueProp="id"
          onChange={newUser => {
            setUser(newUser as MyUserType);
          }}
          sx={{mb: 2}}
          renderOption={({id, name, login}) => {
            return (
              <MenuItem key={id} value={id}>
                {name} - login {login}
              </MenuItem>
            );
          }}
        />

        <div>value: {JSON.stringify(user, null, 2)}</div>
      </>
    );
  },
};
