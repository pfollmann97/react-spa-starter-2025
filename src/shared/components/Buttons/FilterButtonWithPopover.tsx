import {FC} from 'react';
import {Button} from '@mui/material';

import {ButtonWithPopover} from './ButtonWithPopover';

import {COLOR__LIGHT_GRAY} from '@/theme/colors';

const buttonMinWidth = 200;

export interface FilterComponentProps<TFilterValue> {
  value: TFilterValue;
  onChange: (newValue: TFilterValue) => void;
  // Called when filter changing has finished.
  // The filter component may or may not call that method.
  // It depends on the filter itself.
  // If, for example, the filter has "Apply" button, then it should call
  // onFinish after Apply button is pressed to close the popover.
  onFinish: () => void;
}

interface Props<TFilterValue> {
  buttonText: string;
  value: TFilterValue;
  onChange: (newValue: TFilterValue) => void;
  FilterComponent: FC<FilterComponentProps<TFilterValue>>;
}

export const FilterButtonWithPopover = <TFilterValue,>({
  buttonText,
  value,
  onChange,
  FilterComponent,
}: Props<TFilterValue>) => {
  return (
    <ButtonWithPopover
      buttonElement={
        <Button
          variant="subtle"
          color="inherit"
          size="small"
          sx={{
            borderRadius: '10px',
            padding: '10px 16px',
            minWidth: buttonMinWidth,
            fontSize: 16,
            fontWeight: 400,
            color: COLOR__LIGHT_GRAY,
            justifyContent: 'flex-start',
          }}
        >
          {buttonText}
        </Button>
      }
      renderPopoverContent={closePopover => (
        <FilterComponent
          value={value}
          onChange={onChange}
          onFinish={closePopover}
        />
      )}
    />
  );
};
