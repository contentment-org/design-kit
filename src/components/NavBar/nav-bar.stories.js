import React from 'react';
import { Icon, Avatar } from 'antd';
import { storiesOf } from '@storybook/react';
import DesignKitThemeProvider from '../DesignKitThemeProvider';
import NavBar from '.';

const HeaderMenu = [
  {
    key: 'nav1',
    renderItem: <span> Nav 1</span>,
    isActive: false,
  },
  {
    key: 'nav2',
    renderItem: <span> Nav 2</span>,
    isActive: true,
  },
  {
    key: 'nav3',
    renderItem: <span> Nav 3</span>,
    isActive: false,
  },
];

const Notification = (
  <Icon
    type="bell"
    style={{ fontSize: '18px', marginTop: 3, marginRight: 0 }}
  />
);

const User = (
  <Avatar style={{ backgroundColor: 'tomato', verticalAlign: 'middle' }}>
    L
  </Avatar>
);

const Wrapper = ({ ...props }) => (
  <DesignKitThemeProvider>
    <NavBar {...props} />
  </DesignKitThemeProvider>
);
storiesOf('NavBar', module)
  .add('default', () => <Wrapper />)
  .add('with menu', () => <Wrapper menuItems={HeaderMenu} />)
  .add('with notification', () => (
    <Wrapper menuItems={HeaderMenu} notification={Notification} />
  ))
  .add('with user', () => (
    <Wrapper
      menuItems={HeaderMenu}
      notification={Notification}
      userMenu={User}
    />
  ));
