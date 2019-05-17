import React from 'react';
import { oneOf, node, oneOfType, arrayOf } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, orangeTheme } from '../../themes';
export var themes = {
  default: 'default',
  orange: 'orange'
};
var themeMapper = {
  default: defaultTheme,
  orange: orangeTheme
};

var DesignKitThemeProvider = function DesignKitThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return React.createElement(ThemeProvider, {
    theme: themeMapper[theme]
  }, React.createElement("div", null, children));
};

DesignKitThemeProvider.propTypes = {
  theme: oneOf(Object.keys(themes)),
  children: oneOfType([arrayOf(node), node])
};
DesignKitThemeProvider.defaultProps = {
  theme: themes.default
};
export default DesignKitThemeProvider;