import styled, { css } from 'styled-components';
import { string, boolean } from 'prop-types';
import mediaQueries from '../../media-queries';

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection, isResponsive }) =>
    isResponsive && flexDirection !== 'column'
      ? 'column'
      : flexDirection || 'row'};
  flex-wrap: ${({ wrap }) => wrap || 'wrap'};
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};
  ${mediaQueries.media.lg`
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'}
  `}
`;

Flex.propTypes = {
  alignItems: string,
  flexDirection: string,
  justifyContent: string,
  wrap: string,
  isResponsive: boolean,
};

Flex.defaultProps = {
  isResponsive: false,
};

export default Flex;
