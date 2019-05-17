import React from 'react';
import styled, { withTheme } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import DesignKitThemeProvider, { themes } from './design-kit-theme-provider';
var ExampleChild = styled.div.withConfig({
  displayName: "design-kit-theme-providerstories__ExampleChild",
  componentId: "sc-59ro6k-0"
})(["height:70px;width:100%;border:1px solid;padding:20px;background:", ";color:", ";font-family:", ";border-radius:", ";"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.whiteColor;
}, function (props) {
  return props.theme.labelFontFamily;
}, function (props) {
  return props.theme.cardBorderRadius;
});
var StyledComponent = withTheme(ExampleChild);
storiesOf('DesignKitThemeProvider', module).add('default', function () {
  return React.createElement(DesignKitThemeProvider, {
    theme: select('Theme', themes, themes.default, 'themes')
  }, React.createElement(StyledComponent, null, React.createElement("h1", null, "Using theme colors")));
});