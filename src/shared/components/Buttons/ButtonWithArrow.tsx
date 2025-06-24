import {FC, ReactNode} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {Box, ButtonBase, Typography} from '@mui/material';
import {darken} from '@mui/material/styles';

import {COLOR__WHITE} from '@/theme/colors';

const backgroundColorOnHover = darken(COLOR__WHITE, 0.1);

interface Props {
  icon: ReactNode;
  text?: string;
  content?: ReactNode; // pass either text or content
  onClick: () => void;
  arrow?: ReactNode;
}

export const ButtonWithArrow: FC<Props> = ({
  icon,
  text,
  onClick,
  arrow,
  content,
}) => {
  return (
    <ButtonBase onClick={onClick}>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        gap={1}
        sx={{
          backgroundColor: COLOR__WHITE,
          padding: 2,
          borderRadius: '15px',
          '&:hover': {
            backgroundColor: backgroundColorOnHover,
          },
          '&:active': {
            backgroundColor: backgroundColorOnHover,
          },
        }}
      >
        {icon}

        {content ?? (
          <Typography noWrap variant="button">
            {text}
          </Typography>
        )}

        {arrow ?? <EastOutlinedIcon sx={{marginLeft: 'auto'}} />}
      </Box>
    </ButtonBase>
  );
};
