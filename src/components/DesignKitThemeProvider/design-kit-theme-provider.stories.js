import React from 'react';
import styled, { withTheme } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import DesignKitThemeProvider, { themes } from './design-kit-theme-provider';

const ExampleChild = styled.div`
  height: 70px;
  width: 100%;
  border: 1px solid;
  padding: 20px;
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.whiteColor};
  font-family: ${props => props.theme.labelFontFamily};
  border-radius: ${props => props.theme.cardBorderRadius};
`;

const StyledComponent = withTheme(ExampleChild);

storiesOf('DesignKitThemeProvider', module).add('default', () => (
  <DesignKitThemeProvider
    theme={select('Theme', themes, themes.default, 'themes')}
  >
    <StyledComponent>
      <h1>Using theme colors</h1>
    </StyledComponent>
  </DesignKitThemeProvider>
));
