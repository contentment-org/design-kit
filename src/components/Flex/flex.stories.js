import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import Flex from '.';

const StyledFlex = styled(Flex)`
  background-color: dodgerblue;
  color: white;
  border-radius: 3px;
  p {
    margin: 10px;
  }
`;

storiesOf('Flex', module)
  .add('default', () => (
    <StyledFlex justifyContent="space-between">
      <p>Information alpha</p>
      <p>Information beta</p>
    </StyledFlex>
  ))
  .add('with flexDirection', () => (
    <StyledFlex
      isResponsive={boolean('isResponsive', true)}
      flexDirection={select(
        'flexDirection',
        ['row', 'row-reverse', 'column', 'column-reverse'],
        'row',
      )}
    >
      <p>Information alpha</p>
      <p>Information beta</p>
    </StyledFlex>
  ))
  .add('with justifyContent', () => (
    <StyledFlex
      justifyContent={select(
        'justifyContent',
        [
          'center',
          'start',
          'end',
          'flex-start',
          'flex-end',
          'space-between',
          'space-around',
          'space-evenly',
        ],
        'space-between',
      )}
    >
      <p>Information alpha</p>
      <p>Information beta</p>
    </StyledFlex>
  ))
  .add('with alignItems', () => (
    <StyledFlex
      alignItems={select(
        'alignItems',
        [
          'center',
          'baseline',
          'start',
          'end',
          'flex-start',
          'flex-end',
          'right',
          'left',
          'normal',
          'stretch',
          'self-end',
          'self-start',
        ],
        'center',
      )}
    >
      <p>Information alpha</p>
      <p>
        Information beta
        <br />
        extra information
      </p>
    </StyledFlex>
  ))
  .add('with wrap', () => (
    <StyledFlex wrap={select('wrap', ['wrap', 'nowrap'], 'nowrap')}>
      <p>Information alpha</p>
      <p>Information beta</p>
    </StyledFlex>
  ));
