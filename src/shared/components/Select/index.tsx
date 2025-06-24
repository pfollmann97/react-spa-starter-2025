import React, {forwardRef, ReactNode, useCallback, useMemo} from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';

import {helperTextAbsolutePositionStyles} from '@/theme';
import {COLOR__LIGHT_GRAY} from '@/theme/colors';

export interface SelectOption {
  label: ReactNode;
  value: string | number;
}

export type SelectValue = string | number | string[] | number[] | null;

export type SelectProps = Omit<
  MuiSelectProps,
  | 'label'
  | 'error'
  | 'children'
  | 'value'
  | 'onChange'
  | 'defaultValue'
  | 'size'
> & {
  inputPlaceholder?: string;
  label?: string;
  error?: string;
  options?: SelectOption[];
  value: SelectValue;
  onChange: (newValue: SelectValue) => void;
  size?: 'small';
  renderOption?: (option: SelectOption) => ReactNode;
};

const defaultRenderOption = ({label, value}: SelectOption) => (
  <MenuItem key={value} value={value}>
    {label}
  </MenuItem>
);

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      inputPlaceholder,
      label,
      error,
      sx,
      options = [],
      disabled,
      value,
      onChange,
      multiple,
      size,
      renderOption,
      ...restProps
    },
    ref,
  ) => {
    // If label and/or error is specified, then Select is wrapped by FormControl.
    // So, sx is applied to it, not to the Select.
    const sxForSelect = label || error ? undefined : sx;

    const opacity = disabled ? 0.5 : undefined;

    const normalizedValue = useMemo(() => {
      if (isNil(value) || isEmpty(options)) {
        return multiple ? [] : '';
      }

      // eslint-disable-next-line unicorn/prefer-array-some
      if (!multiple && !options.find(opt => opt.value === value)) {
        return '';
      }

      return value;
    }, [value, options, multiple]);

    const handleChange = useCallback(
      (event: SelectChangeEvent<unknown>) => {
        const newValue = event.target.value;

        if (isNil(newValue) || newValue === '') {
          onChange?.(null);
          return;
        }

        onChange?.(newValue as SelectValue);
      },
      [onChange],
    );

    const selectElem = (
      <MuiSelect
        value={normalizedValue}
        onChange={handleChange}
        multiple={multiple}
        sx={{
          opacity,
          ...(size === 'small'
            ? {
                '& .MuiSelect-select': {
                  paddingY: '8px !important',
                },
              }
            : undefined),
          ...(inputPlaceholder
            ? {
                '& .MuiSelect-select span::before': {
                  color: COLOR__LIGHT_GRAY,
                  content: `"${inputPlaceholder}"`,
                },
              }
            : undefined),
          ...sxForSelect,
        }}
        disabled={disabled}
        {...restProps}
        ref={ref}
      >
        {options.map(renderOption ?? defaultRenderOption)}
      </MuiSelect>
    );

    if (label || error) {
      return (
        <FormControl error={!!error} sx={sx}>
          <InputLabel sx={{opacity}}>{label}</InputLabel>
          {selectElem}
          {error && (
            <FormHelperText
              sx={{whiteSpace: 'nowrap', ...helperTextAbsolutePositionStyles}}
            >
              {error}
            </FormHelperText>
          )}
        </FormControl>
      );
    }

    return selectElem;
  },
);
