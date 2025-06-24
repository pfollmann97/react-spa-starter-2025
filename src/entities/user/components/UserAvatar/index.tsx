import {FC} from 'react';
import {Avatar, Typography} from '@mui/material';

import {getNameInitials} from '@shared/utils';

interface Props {
  name: string;
  photoUrl?: string;
  size?: number;
  color?: string;
  bgColor?: string;
}

export const UserAvatar: FC<Props> = ({
  name,
  photoUrl,
  size,
  color = 'white',
  bgColor,
  ...restProps
}) => {
  const initials = getNameInitials(name);

  return (
    <Avatar
      alt={name}
      sx={{width: size, height: size, backgroundColor: bgColor}}
      src={photoUrl}
      {...restProps}
    >
      {initials && (
        <Typography
          sx={{
            fontSize: size ? size / 2 : size,
            fontWeight: 500,
            color,
          }}
        >
          {initials}
        </Typography>
      )}
    </Avatar>
  );
};
