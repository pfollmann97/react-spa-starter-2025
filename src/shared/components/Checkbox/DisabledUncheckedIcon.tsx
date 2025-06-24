import {FC} from 'react';
import {SvgIcon, SvgIconProps} from '@mui/material';

export const DisabledUncheckedIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <rect width="24" height="24" rx="6" fill="#F6F6F6" />
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="5.5"
            stroke="#171717"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
