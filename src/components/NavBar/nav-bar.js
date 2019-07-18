import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Divider, Drawer } from 'antd';
import styled from 'styled-components';
import IconHamburger from '@contentment-org/icons/ic-hamburger';
import mediaQueries from '../../media-queries';

import Flex from '../Flex';
import Logo from '../Logo';

const { Header } = Layout;

const StyledDrawer = styled(Drawer)`
  ${mediaQueries.media.lg`
    display: none;
  `}
  .ant-drawer-header {
    height: 64px;
  }
`;

const WebMenuContainer = styled(Flex)`
  display: none;
  ${mediaQueries.media.lg`
    display: flex;
  `}
`;

const MobileMenuContainer = styled(Flex)`
  flex-direction: column;
  ${mediaQueries.media.lg`
    display: none;
  `};
`;

const MenuItemWrapper = styled(Flex)`
  font-family: ${props => props.theme.varelaRegular};
  margin: 0;
  padding: 20px 0px;
  white-space: nowrap;
  cursor: pointer;
  color: ${props => props.isActive && props.theme.secondaryColor};
  &: hover {
    color: ${props => props.theme.secondaryColor};
  }
  ${mediaQueries.media.lg`
    padding: 0px 20px;
  `};

  a {
    color: ${props =>
      props.isActive ? props.theme.secondaryColor : props.theme.fontColor};
    font-family: ${props => props.theme.varelaRegular};
  }
`;

const OtherItemWrapper = styled(Flex)`
  padding: 0 20px;
  &: hover {
    color: ${props => props.theme.secondaryColor};
  }
`;

const StyledDivider = styled(Divider)`
  display: none;
  ${mediaQueries.media.lg`
    display: block;
  `}
`;

const StyledHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
  background: ${props => props.theme.whiteColor};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  height: 64px;
  padding: 0;
  padding-left: 20px;
`;

const MenuIcon = styled(IconHamburger)`
  position: relative;
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
  ${mediaQueries.media.lg`
    display: none;
  `}
  path {
    stroke: #363636;
    stroke-width: 5;
    stroke-linecap: round;
    transition: all 250ms ease-in-out;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    will-change: transform, opacity;
  }
`;

class NavBar extends React.Component {
  state = {
    isDrawerOpen: false,
  };

  toggleDrawer = () => {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen,
    }));
  };

  render() {
    const { logo, menuItems, notification, userMenu, habbitMenu } = this.props;
    const { isDrawerOpen } = this.state;
    return (
      <>
        <StyledHeader>
          <Flex justifyContent="space-between">
            <Flex alignItems="center">
              <MenuIcon onClick={this.toggleDrawer} />
              {logo}
            </Flex>
            <Flex alignItems="center">
              <WebMenuContainer alignItems="center">
                {menuItems &&
                  menuItems.length &&
                  menuItems.map(item => (
                    <MenuItemWrapper key={item.key} isActive={item.isActive}>
                      {item.renderItem}
                    </MenuItemWrapper>
                  ))}
              </WebMenuContainer>
              {menuItems && menuItems.length && (notification || userMenu) && (
                <StyledDivider type="vertical" style={{ height: 30 }} />
              )}
              <Flex alignItems="center">
                {notification && (
                  <OtherItemWrapper>{notification}</OtherItemWrapper>
                )}
                {habbitMenu && (
                  <OtherItemWrapper>{habbitMenu}</OtherItemWrapper>
                )}
                {userMenu && <OtherItemWrapper>{userMenu}</OtherItemWrapper>}
              </Flex>
            </Flex>
          </Flex>
        </StyledHeader>
        <StyledDrawer
          placement="left"
          onClose={this.toggleDrawer}
          visible={isDrawerOpen}
          closable
          title={logo}
        >
          <MobileMenuContainer>
            {menuItems &&
              menuItems.length &&
              menuItems.map(item => (
                <MenuItemWrapper key={item.key} isActive={item.isActive}>
                  {item.renderItem}
                </MenuItemWrapper>
              ))}
          </MobileMenuContainer>
        </StyledDrawer>
      </>
    );
  }
}

NavBar.defaultProps = {
  logo: (
    <a href="/">
      <Logo height={38} />
    </a>
  ),
};
NavBar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      renderItem: PropTypes.node.isRequired,
      isActive: PropTypes.bool,
    }),
  ),
  logo: PropTypes.node,
  notification: PropTypes.node,
  userMenu: PropTypes.node,
};

export default NavBar;
