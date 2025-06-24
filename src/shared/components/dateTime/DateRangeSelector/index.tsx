import {FC, useState} from 'react';
import {DateRange} from 'react-day-picker';
import {Button, Stack} from '@mui/material';
import {format, isSameDay} from 'date-fns';

import {
  DayPicker,
  FilterButtonWithPopover,
  FilterComponentProps,
} from '@shared/components';

const PopoverContent: FC<FilterComponentProps<DateRange | undefined>> = ({
  value,
  onChange,
  onFinish,
}) => {
  const [range, setRange] = useState<DateRange | undefined>(value);

  return (
    <Stack p={2} spacing={2}>
      <DayPicker
        mode="range"
        selected={range}
        onSelect={val => {
          setRange(val);
        }}
        defaultMonth={range?.from}
        required
      />

      <Stack direction="row" spacing={4} justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={() => {
            onFinish();
          }}
          fullWidth
        >
          Отмена
        </Button>

        <Button
          onClick={() => {
            onChange(range);
            onFinish();
          }}
          fullWidth
        >
          Применить
        </Button>
      </Stack>
    </Stack>
  );
};

const getButtonText = (
  startDate: Date | undefined,
  endDate: Date | undefined,
) => {
  const dateFormat = 'd MMMM';

  if (startDate && !endDate) {
    return format(startDate, `с ${dateFormat}`);
  }

  if (!startDate && endDate) {
    return format(endDate, `до ${dateFormat}`);
  }

  if (isSameDay(startDate as Date, endDate as Date)) {
    return format(startDate as Date, dateFormat);
  }

  return `${format(startDate as Date, dateFormat)} - ${format(
    endDate as Date,
    dateFormat,
  )}`;
};

type DateRangeSelectorProps = Omit<
  FilterComponentProps<DateRange | undefined>,
  'onFinish'
> & {
  defaultButtonText: string;
};

export const DateRangeSelector: FC<DateRangeSelectorProps> = ({
  value,
  onChange,
  defaultButtonText,
}) => {
  const {from, to} = value ?? {};

  return (
    <FilterButtonWithPopover
      buttonText={value ? getButtonText(from, to) : defaultButtonText}
      FilterComponent={PopoverContent}
      value={value}
      onChange={onChange}
    />
  );
};
