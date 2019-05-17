import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';

setOptions({
  name: 'contentment.org',
  url: 'https://github.com/contentment-org/design-kit',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: true,
  downPanelInRight: true,
});

const req = require.context('../lib', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);
configure(loadStories, module);
