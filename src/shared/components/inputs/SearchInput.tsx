import {ChangeEvent, FC} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from '@mui/material';

import {COLOR__BACK, COLOR__LIGHT_GRAY} from '@/theme/colors';

export const SearchInput: FC<TextFieldProps> = ({
  value,
  onChange,
  sx,
  ...restProps
}) => {
  const handleClear = () => {
    onChange?.({target: {value: ''}} as ChangeEvent<HTMLInputElement>);
  };

  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder="Поиск"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              sx={{color: COLOR__LIGHT_GRAY, width: 20, height: 20}}
            />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              edge="end"
              size="small"
              sx={{visibility: value ? undefined : 'hidden'}}
              onClick={handleClear}
            >
              <CloseIcon
                sx={{color: COLOR__LIGHT_GRAY, width: 18, height: 18}}
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        ...sx,
        borderRadius: '10px',
        backgroundColor: COLOR__BACK,
        '& fieldset': {
          border: '1px solid transparent',
        },
        '& input': {
          paddingLeft: 0,
        },
      }}
      {...restProps}
    />
  );
};
