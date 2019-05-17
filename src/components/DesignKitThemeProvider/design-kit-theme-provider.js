import React from 'react';
import { oneOf, node, oneOfType, arrayOf } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { defaultTheme, orangeTheme } from '../../themes';

export const themes = {
  default: 'default',
  orange: 'orange',
};

const themeMapper = {
  default: defaultTheme,
  orange: orangeTheme,
};

const DesignKitThemeProvider = ({ theme, children }) => (
  <ThemeProvider theme={themeMapper[theme]}>
    <div>{children}</div>
  </ThemeProvider>
);

DesignKitThemeProvider.propTypes = {
  theme: oneOf(Object.keys(themes)),
  children: oneOfType([arrayOf(node), node]),
};

DesignKitThemeProvider.defaultProps = {
  theme: themes.default,
};

export default DesignKitThemeProvider;
