import {FC} from 'react';
import {NumericFormat, NumericFormatProps} from 'react-number-format';

export const CountValue: FC<NumericFormatProps> = props => {
  return (
    <NumericFormat
      displayType="text"
      allowNegative={false}
      decimalScale={0}
      thousandSeparator=" "
      {...props}
    />
  );
};
