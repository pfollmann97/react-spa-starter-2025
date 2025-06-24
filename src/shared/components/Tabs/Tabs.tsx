import {Stack, StackProps} from '@mui/material';

import {TabButton} from './TabButton';

export interface TabAttrs<TTabValue> {
  value: TTabValue;
  label: string;
  counter?: number;
}

interface Props<TTabValue> extends StackProps {
  tabs: TabAttrs<TTabValue>[];
  currentTab: TTabValue;
  onCurrentTabChange: (newTab: TTabValue) => void;
}

export const Tabs = <TTabValue,>({
  tabs,
  currentTab,
  onCurrentTabChange,
  ...restProps
}: Props<TTabValue>) => {
  return (
    <Stack direction="row" gap={1.5} {...restProps}>
      {tabs.map(({value, label, counter}) => (
        <TabButton
          key={label}
          value={value}
          label={label}
          counter={counter}
          isSelected={currentTab === value}
          onSelect={onCurrentTabChange}
        />
      ))}
    </Stack>
  );
};
