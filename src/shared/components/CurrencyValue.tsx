import {FC} from 'react';
import {NumericFormat, NumericFormatProps} from 'react-number-format';

export const CurrencyValue: FC<NumericFormatProps> = ({
  value,
  ...restProps
}) => {
  return (
    <NumericFormat
      displayType="text"
      value={value}
      allowNegative
      decimalScale={2}
      thousandSeparator=" "
      suffix="₽"
      {...restProps}
    />
  );
};
