# Flex

This component adds styled `div` component with `flex` styles applied to it. You can tweak `flex` style based on your requirement using props listed below. You can also check sotrybook playground [here](https://contentment-org.github.io/design-kit/?path=/story/flex--default).

## Sample

```js
import { Flex } from '@contentment-org/design-kit';

const App = () => (
  <Flex>
    <h1>Flex content </h1>
    <h1> Flex content 2 </h1>
  </Flex>
);
```

## Props

- `alignItems` [optional] accepts `string` value. It can be any value that `align-items` css property can accept.

- `justifyContent` [optional] accepts `string` value. It can be any value that `justify-content` css property can accept.

- `flexDirection` [optional] accepts `string` value. It can be any value that `flex-direction` css property can accept. default value is `row`.

- `isResponsive` [optional] accepts `boolean` value. Enabling this option can set `flex-direction` to `column` in case of mobile view. By default it is `false`.

- `wrap` [optional] accepts `string` value. It can be any value that `flex-wrap` css property can accept. By default its value is `wrap`.
