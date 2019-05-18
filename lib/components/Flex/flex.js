import styled, { css } from 'styled-components';
var Flex = styled.div.withConfig({
  displayName: "flex__Flex",
  componentId: "r1dfu-0"
})(["display:flex;flex-direction:", ";flex-wrap:", ";", ";", ";"], function (_ref) {
  var flexDirection = _ref.flexDirection;
  return flexDirection || 'row';
}, function (_ref2) {
  var wrap = _ref2.wrap;
  return wrap || 'wrap';
}, function (_ref3) {
  var alignItems = _ref3.alignItems;
  return alignItems && css(["align-items:", ";"], alignItems);
}, function (_ref4) {
  var justifyContent = _ref4.justifyContent;
  return justifyContent && css(["justify-content:", ";"], justifyContent);
});
export default Flex;