# DesignKitThemeProvider

This is the root level theme provider component which can pass theme to its child component using `withTheme` higher order component from `styled-components`.

## Sample

```js
import { DesignKitThemeProvider } from '@contentment-org/design-kit';
import styled, { withTheme } from 'styled-components';

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

const App = () => (
  <DesignKitThemeProvider>
    <StyledComponent>
      <h1>Using theme colors</h1>
    </StyledComponent>
  </DesignKitThemeProvider>
);
```

## Props

- `themes` accepts string value. It can be either `default` or `orange`. By default if prop is not passed it will take default theme.
