import '@shared/setup/yupV8nMessages';
import type {Preview} from '@storybook/react';
import theme from '../src/theme';
import {ThemeProvider} from '@mui/material/styles';
import { withRouter } from 'storybook-addon-remix-react-router';
import {setDefaultOptions} from 'date-fns';
import {ru as ruLocale} from 'date-fns/locale';

import '../src/App/font.css';
import './globalStyles.css';

// Set global locale for date-fns
setDefaultOptions({locale: ruLocale});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withRouter,
    Story => (
      <ThemeProvider theme={theme}>
          <Story />
      </ThemeProvider>
    ),
  ],
  // Enables auto-generated documentation for all stories
  tags: ['autodocs'],
};

export default preview;
