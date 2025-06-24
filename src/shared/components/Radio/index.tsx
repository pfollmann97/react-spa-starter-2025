import {FC, useRef} from 'react';
import {Radio as MuiRadio, RadioProps} from '@mui/material';
import useHover from 'ahooks/es/useHover';

import {CheckedIcon} from './CheckedIcon';
import {HoverCheckedIcon} from './HoverCheckedIcon';
import {HoverUncheckedIcon} from './HoverUncheckedIcon';
import {UncheckedIcon} from './UncheckedIcon';

export const Radio: FC<RadioProps> = ({
  checked,
  disabled,
  sx,
  ...restProps
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const isHovering = useHover(ref);

  const uncheckedIcon = isHovering ? <HoverUncheckedIcon /> : <UncheckedIcon />;
  const checkedIcon = isHovering ? <HoverCheckedIcon /> : <CheckedIcon />;

  return (
    <MuiRadio
      inputRef={ref}
      checked={checked}
      disabled={disabled}
      sx={{
        '&:hover': {
          backgroundColor: 'transparent',
        },
        opacity: disabled ? 0.4 : undefined,
        ...sx,
      }}
      icon={disabled ? <UncheckedIcon /> : uncheckedIcon}
      checkedIcon={disabled ? <CheckedIcon /> : checkedIcon}
      {...restProps}
    />
  );
};
