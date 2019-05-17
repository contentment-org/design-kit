import { css } from 'styled-components';

const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
};

const xs = {
  maxWidth: sizes.sm - 1,
};

const sm = {
  minWidth: sizes.sm,
  maxWidth: sizes.md - 1,
};

const md = {
  minWidth: sizes.md,
  maxWidth: sizes.lg - 1,
};

const lg = {
  minWidth: sizes.lg,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default {
  xs,
  sm,
  md,
  lg,
  media,
};
