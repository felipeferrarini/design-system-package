import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // viteFinal: async (config) => {
  //   if (config.resolve) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       // Example for a common '@' alias pointing to the 'src' directory
  //       '@': path.resolve(__dirname, '../src'),
  //       // Add other aliases as needed, e.g.,
  //       // '@components': path.resolve(__dirname, '../src/components'),
  //     };
  //   }
  //   return config;
  // },
};
export default config;
