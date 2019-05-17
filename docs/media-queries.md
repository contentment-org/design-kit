# Media Queries

## Sample

```js
import { mediaQueries } from '@contentment-org/design-kit';

const MyComponent = styled.div`
  display: none; // hide for mobile
  ${mediaQueries.media.lg`
    display: block; // show for large
  `}
`;
```

For custom media queries you can import various screen size options from library.

```js
import { mediaQueries } from '@contentment-org/design-kit';

const { xs, sm, md, lg } = mediaQueries;
```
