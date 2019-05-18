import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '.';
storiesOf('Flex', module).add('default', function () {
  return React.createElement(Flex, {
    style: {
      backgroundColor: 'coral'
    }
  }, React.createElement("p", null, "Information alpha"), React.createElement("p", null, "Information beta"));
}).add('With flexDirection', function () {
  return React.createElement(Flex, {
    flexDirection: "column",
    style: {
      backgroundColor: 'coral'
    }
  }, React.createElement("p", null, "Information alpha"), React.createElement("p", null, "Information beta"));
}).add('With justifyContent', function () {
  return React.createElement(Flex, {
    justifyContent: "space-between",
    style: {
      backgroundColor: 'coral'
    }
  }, React.createElement("p", null, "Information alpha"), React.createElement("p", null, "Information beta"));
}).add('With alignItems', function () {
  return React.createElement(Flex, {
    alignItems: "flex-end",
    style: {
      backgroundColor: 'coral'
    }
  }, React.createElement("p", null, "Information alpha"), React.createElement("p", null, "Information beta"));
});