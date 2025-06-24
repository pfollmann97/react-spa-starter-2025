import {Box} from '@mui/material';
import type {Meta} from '@storybook/react';

import {Stepper} from './Stepper';

import {COLOR__LIGHT_BACK} from '@/theme/colors';

const meta = {
  title: 'UI kit/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [{name: 'LightBack', value: COLOR__LIGHT_BACK}],
      default: 'LightBack',
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;

export const Basic = {
  render: () => {
    const activeStep = 1;

    return (
      <Box width="50vw">
        <Stepper activeStep={activeStep} stepCount={4} />
      </Box>
    );
  },
};
