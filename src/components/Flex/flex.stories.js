import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '.';

storiesOf('Flex', module)
  .add('default', () => (
    <Flex style={{ backgroundColor: 'coral' }}>
      <p>Information alpha</p>
      <p>Information beta</p>
    </Flex>
  ))
  .add('With flexDirection', () => (
    <Flex flexDirection="column" style={{ backgroundColor: 'coral' }}>
      <p>Information alpha</p>
      <p>Information beta</p>
    </Flex>
  ))
  .add('With justifyContent', () => (
    <Flex justifyContent="space-between" style={{ backgroundColor: 'coral' }}>
      <p>Information alpha</p>
      <p>Information beta</p>
    </Flex>
  ))
  .add('With alignItems', () => (
    <Flex alignItems="flex-end" style={{ backgroundColor: 'coral' }}>
      <p>Information alpha</p>
      <p>Information beta</p>
    </Flex>
  ));
