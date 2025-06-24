// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';
import {DateRange} from 'react-day-picker';
import type {Meta} from '@storybook/react';

import {DateRangeSelector} from './index';

const meta = {
  title: 'UI kit/DateTime/DateRangeSelector',
  component: DateRangeSelector,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateRangeSelector>;

export default meta;

export const Initial = {
  render: () => {
    const [range, setRange] = useState<DateRange>();

    return (
      <>
        <DateRangeSelector
          defaultButtonText="Выберите даты"
          value={range}
          onChange={val => {
            setRange(val);
          }}
        />

        <div style={{marginTop: '16px'}}>
          value: {JSON.stringify(range, null, 2)}
        </div>
      </>
    );
  },
};
