import {ReactElement} from 'react';
import {Box, Stack, Typography, TypographyProps} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

const sampleText = 'Пример текста 519';

const meta = {
  title: 'UI Kit/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: sampleText,
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderVariants = (
  variants: Array<TypographyProps['variant']>,
): ReactElement => {
  return (
    <>
      {variants.map(variant => {
        return (
          <Box display="flex" key={variant}>
            <Typography variant={variant}>{sampleText}</Typography>
            <Typography variant={variant} color="secondary">
              {` - ${variant}`}
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

export const All: Story = {
  render: () => (
    <>
      <Stack spacing={2} mb={4}>
        {renderVariants(['h1', 'h2', 'h3', 'h3bold', 'button'])}
      </Stack>

      <Stack direction="row" spacing={4} alignItems="center">
        <Stack spacing={2}>
          {renderVariants(['b1regular', 'b1medium', 'b1semibold'])}
        </Stack>

        <Stack spacing={2}>
          {renderVariants(['b2regular', 'b2medium', 'b2semibold'])}
        </Stack>

        <Stack spacing={2}>
          {renderVariants(['b3regular', 'b3medium', 'b3semibold'])}
        </Stack>
      </Stack>
    </>
  ),
};

export const H1: Story = {
  args: {
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
  },
};

export const H3bold: Story = {
  args: {
    variant: 'h3bold',
  },
};

export const Button: Story = {
  args: {
    variant: 'button',
  },
};

export const B1regular: Story = {
  args: {
    variant: 'b1regular',
  },
};

export const B1medium: Story = {
  args: {
    variant: 'b1medium',
  },
};

export const B1semibold: Story = {
  args: {
    variant: 'b1semibold',
  },
};

export const B2regular: Story = {
  args: {
    variant: 'b2regular',
  },
};

export const B2medium: Story = {
  args: {
    variant: 'b2medium',
  },
};

export const B2semibold: Story = {
  args: {
    variant: 'b2semibold',
  },
};

export const B3regular: Story = {
  args: {
    variant: 'b3regular',
  },
};

export const B3medium: Story = {
  args: {
    variant: 'b3medium',
  },
};

export const B3semibold: Story = {
  args: {
    variant: 'b3semibold',
  },
};
