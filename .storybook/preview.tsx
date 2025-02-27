import type { Preview } from '@storybook/react';

import ThemeProvider from '../src/components/themeProvider';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;

      return (
        <div
          {...(theme === 'dark' && {
            style: {
              backgroundColor: 'var(--rp-ui-base-dark-bg)',
              padding: '10px',
            },
          })}
        >
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </div>
      );
    },
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
