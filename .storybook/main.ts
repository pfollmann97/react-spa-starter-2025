import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    'storybook-addon-remix-react-router'
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  core: {
    disableTelemetry: true
  }
};

export default config;
