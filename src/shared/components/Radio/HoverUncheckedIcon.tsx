import {FC} from 'react';
import {SvgIcon, SvgIconProps} from '@mui/material';

export const HoverUncheckedIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="11"
          fill="#EDEEF3"
          stroke="#EDEEF3"
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};
