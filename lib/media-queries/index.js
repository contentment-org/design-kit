import { css } from 'styled-components';
var sizes = {
  sm: 576,
  md: 768,
  lg: 992
};
var xs = {
  maxWidth: sizes.sm - 1
};
var sm = {
  minWidth: sizes.sm,
  maxWidth: sizes.md - 1
};
var md = {
  minWidth: sizes.md,
  maxWidth: sizes.lg - 1
};
var lg = {
  minWidth: sizes.lg
};
var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return css(["@media (min-width:", "em){", ";}"], sizes[label] / 16, css.apply(void 0, arguments));
  };

  return acc;
}, {});
export default {
  xs: xs,
  sm: sm,
  md: md,
  lg: lg,
  media: media
};