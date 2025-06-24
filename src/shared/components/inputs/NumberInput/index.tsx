import {forwardRef} from 'react';
import {NumericFormatProps} from 'react-number-format';
import {TextField, TextFieldProps} from '@mui/material';

import {CustomNumberFormat} from './CustomNumberFormat';

export enum InputType {
  integer = 'integer',
  positiveInteger = 'positive-integer',
}

const inputType2formatProps: Record<InputType, object> = {
  [InputType.integer]: {
    decimalScale: 0,
  },
  [InputType.positiveInteger]: {
    decimalScale: 0,
    allowNegative: false,
  },
};

type Props = {
  // If inputType is not specified, then there are no any restrictions on the input (type any)
  inputType?: InputType;
  formatProps?: Omit<NumericFormatProps, 'defaultValue'>;
} & TextFieldProps;

export const NumberInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {inputType, formatProps, ...restProps} = props;

  let formatPropsDefinedByInputType: object = {};
  if (inputType) {
    formatPropsDefinedByInputType = inputType2formatProps[inputType];

    if (!formatPropsDefinedByInputType) {
      console.error(`Unexpected input type "${inputType}"`);
    }
  }

  return (
    <TextField
      ref={ref}
      InputProps={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputComponent: CustomNumberFormat,
      }}
      inputProps={{
        ...formatPropsDefinedByInputType,
        ...formatProps,
      }}
      {...restProps}
    />
  );
});
