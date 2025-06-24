import {FC} from 'react';
import {SvgIcon, SvgIconProps} from '@mui/material';

export const UncheckedIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="11.5" fill="#F6F6F6" stroke="#FFB900" />
      </svg>
    </SvgIcon>
  );
};
