import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import Logo from '.';

storiesOf('Logo', module)
  .add('default', () => <Logo />)
  .add('with height', () => <Logo height={number('height', 40)} />);
