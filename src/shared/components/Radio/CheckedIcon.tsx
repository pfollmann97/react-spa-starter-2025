import {FC} from 'react';
import {SvgIcon, SvgIconProps} from '@mui/material';

export const CheckedIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_57_6883)">
          <circle cx="12" cy="12" r="12" fill="#FFB900" />
          <rect x="6" y="6" width="12" height="12" rx="6" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_57_6883">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
