import {FC} from 'react';
import {SvgIcon, SvgIconProps} from '@mui/material';

export const ClickToSortIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props}>
      <svg
        width="11"
        height="22"
        viewBox="0 0 11 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.46854 9.06152H1.53146C1.2934 9.06152 1.16047 8.81017 1.3079 8.63857L5.27644 4.0368C5.39003 3.90508 5.60876 3.90508 5.72356 4.0368L9.6921 8.63857C9.83953 8.81017 9.7066 9.06152 9.46854 9.06152Z"
          fill="#98979F"
        />
        <path
          d="M9.6921 12.361L5.72356 16.9627C5.60997 17.0945 5.39124 17.0945 5.27644 16.9627L1.3079 12.361C1.16047 12.1894 1.2934 11.938 1.53146 11.938H9.46854C9.7066 11.938 9.83953 12.1894 9.6921 12.361Z"
          fill="#98979F"
        />
      </svg>
    </SvgIcon>
  );
};
