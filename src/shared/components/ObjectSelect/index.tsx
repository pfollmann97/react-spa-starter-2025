import React, {forwardRef, ReactNode, Ref, useCallback, useMemo} from 'react';
import isNil from 'lodash/isNil';

import {
  Select,
  SelectOption,
  SelectProps,
  SelectValue,
} from '@shared/components';

export interface ObjectSelectProps<Option>
  extends Omit<
    SelectProps,
    'options' | 'value' | 'onChange' | 'variant' | 'renderOption'
  > {
  options?: Option[];
  // Для режима singular value: TOption | null
  // Для режима multiple value: TOption[]. При clear устанавливается пустой массив.
  // Пробовал использовать conditional types для value и onChange в зависимости от
  // mode prop value, не получилось побороть Typescript
  value: Option | Option[] | null;
  onChange: (value: Option | Option[] | null) => void;
  // Названия поля в объекте-опции, которое будет использоваться как label
  labelProp: keyof Option;
  // Названия поля в объекте-опции, которое будет использоваться в качестве value
  valueProp: keyof Option;
  renderOption?: (option: Option) => ReactNode;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function ObjectSelectInner<TOption extends object>(
  {
    options = [],
    value,
    onChange,
    labelProp,
    valueProp,
    multiple,
    renderOption,
    ...restProps
  }: ObjectSelectProps<TOption>,
  ref: Ref<HTMLInputElement>,
): React.JSX.Element {
  const normalizedOptions = useMemo(() => {
    return options.map(opt => ({
      label: opt[labelProp],
      value: opt[valueProp],
    }));
  }, [options, labelProp, valueProp]);

  const normalizedValue = useMemo(() => {
    if (isNil(value)) {
      return null;
    }

    if (Array.isArray(value)) {
      return value.map(opt => {
        return opt[valueProp];
      });
    }

    return value[valueProp];
  }, [value, valueProp]);

  const handleChange = useCallback(
    (newValue: SelectValue) => {
      if (isNil(newValue)) {
        onChange(null);
        return;
      }

      if (multiple) {
        if (Array.isArray(newValue)) {
          const newSelectedOptions = newValue
            .map(val => {
              return options.find(opt => opt[valueProp] === val);
            })
            .filter(opt => !!opt);

          // as можно спокойно написать, т.к. в массиве остались только TOption
          onChange(newSelectedOptions as TOption[]);
        } else {
          // impossible case
          console.warn('Object Select multiple=true, but unexpected value', {
            newValue,
          });
          onChange(null);
        }

        return;
      }

      onChange(options.find(opt => opt[valueProp] === newValue) ?? null);
    },
    [multiple, onChange, options, valueProp],
  );

  const handleRenderOption = useCallback(
    ({value: optValue}: SelectOption) => {
      const optionToRender = options?.find(opt => opt[valueProp] === optValue);

      if (!optionToRender) {
        return null;
      }

      return renderOption!(optionToRender);
    },
    [options, renderOption, valueProp],
  );

  return (
    <Select
      multiple={multiple}
      value={normalizedValue as SelectValue}
      onChange={handleChange}
      options={normalizedOptions as SelectOption[]}
      renderOption={renderOption ? handleRenderOption : undefined}
      {...restProps}
      ref={ref}
    />
  );
}

export const ObjectSelect = forwardRef(ObjectSelectInner) as unknown as <
  TOption,
>(
  props: ObjectSelectProps<TOption> & {ref?: Ref<HTMLInputElement>},
) => ReturnType<typeof ObjectSelectInner>;
