import {FC} from 'react';
import {NumericFormat, NumericFormatProps} from 'react-number-format';

export const DonePercentValue: FC<NumericFormatProps> = props => {
  return (
    <NumericFormat displayType="text" decimalScale={0} suffix="%" {...props} />
  );
};
