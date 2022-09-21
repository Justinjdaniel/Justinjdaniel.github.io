/**
 * Todo add proper naming for the colors for better understanding
 * Todo add appropriate fonts for heading
 */

import { extendTheme, theme as base } from '@chakra-ui/react';

/**
 * Add your color mode config]
 * @ref https://chakra-ui.com/docs/styled-system/color-mode
 */
const config = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};

/**
 * Extend the theme to include custom fonts.
 * @ref https://chakra-ui.com/community/recipes/using-fonts
 */
const fonts = {
  body: `'Poppins', ${base.fonts?.body}, system-ui, sans-serif`,
  heading: `'Poppins', ${base.fonts?.heading}, sans-serif`,
  mono: `Menlo, ${base.fonts?.mono}, monospace`,
};

/**
 * Extend the theme to include custom colors
 * @ref https://chakra-ui.com/docs/styled-system/customize-theme
 */
const colors = {
  bio: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    200: '#6379d9',
    210: '#283159',
    220: '#60dd62',
    230: '#3374ce',
    240: '#535bf2',
    250: '#646cff',
  },
};

const theme = extendTheme({ config, fonts });

export default theme;
