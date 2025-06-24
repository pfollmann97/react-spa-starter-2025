// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';
import type {Meta} from '@storybook/react';

import {DateSelector} from './index';

const meta = {
  title: 'UI kit/DateTime/DateSelector',
  component: DateSelector,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateSelector>;

export default meta;

export const Initial = {
  render: () => {
    const [date, setDate] = useState<Date>();

    return (
      <>
        <DateSelector
          defaultButtonText="Дата окончания"
          value={date}
          onChange={val => {
            setDate(val);
          }}
        />

        <div style={{marginTop: '16px'}}>
          value: {JSON.stringify(date, null, 2)}
        </div>
      </>
    );
  },
};
