import React from 'react';
import {NumericFormat, NumericFormatProps} from 'react-number-format';

interface Props extends NumericFormatProps {
  onChange: (event: {target: {name: string; value: string}}) => void;
  name: string;
}

export const CustomNumberFormat = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const {onChange, ...restProps} = props;

    return (
      <NumericFormat
        getInputRef={ref}
        onValueChange={values => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        {...restProps}
      />
    );
  },
);
