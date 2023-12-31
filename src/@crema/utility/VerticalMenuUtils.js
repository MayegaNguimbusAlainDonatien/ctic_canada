import {Link, useLocation} from 'react-router-dom';
import React from 'react';
import routesConfig from '../../pages/routeConfig';
import {useIntl} from 'react-intl';
import {useSidebarContext} from './AppContextProvider/SidebarContextProvider';
import {Nav} from 'react-bootstrap';

function getStyles(item, sidebarColorSet, isSidebarBgImage, index, isGroup) {
  const {pathname} = useLocation();
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/');

  if (index === 0 || isGroup) {
    return {
      color: sidebarColorSet.sidebarTextColor,
      backgroundColor: isSidebarBgImage ? '' : sidebarColorSet.sidebarBgColor,
    };
  } else {
    const isActive = defaultOpenKeys[index] === item.id;

    return {
      color: isActive
        ? sidebarColorSet.sidebarMenuSelectedTextColor
        : sidebarColorSet.sidebarTextColor,
      backgroundColor: isActive
        ? sidebarColorSet.sidebarMenuSelectedBgColor
        : isSidebarBgImage
        ? ''
        : sidebarColorSet.sidebarBgColor,
    };
  }
}

const renderMenuItemChildren = (item) => {
  const {icon, messageId, path} = item;
  const {messages} = useIntl();

  if (path && path.includes('/'))
    return (
      <Link to={path}>
        {icon &&
          (React.isValidElement(icon) ? (
            <span className='ant-menu-item-icon'>{icon}</span>
          ) : (
            <icon className='ant-menu-item-icon' />
          ))}
        <span data-testid={messageId.toLowerCase + '-nav'}>
          {messages[messageId]}
        </span>
      </Link>
    );
  else {
    return (
      <>
        {icon &&
          (React.isValidElement(icon) ? (
            <span className='ant-menu-item-icon'>{icon}</span>
          ) : (
            <icon className='ant-menu-item-icon' />
          ))}
        <span data-testid={messageId.toLowerCase + '-nav'}>
          {messages[messageId]}
        </span>
      </>
    );
  }
};

const renderMenuItem = (item, sidebarColorSet, isSidebarBgImage, index) => {
  return item.type === 'collapse' ? (
    <Nav.SubMenu
      style={getStyles(item, sidebarColorSet, isSidebarBgImage, index, true)}
      key={item.path ? item.path : item.id}
      title={renderMenuItemChildren(item, sidebarColorSet, isSidebarBgImage)}>
      {item.children.map((item) =>
        renderMenuItem(item, sidebarColorSet, isSidebarBgImage, index + 1),
      )}
    </Nav.SubMenu>
  ) : (
    <Nav.Item
      key={item.id}
      style={getStyles(item, sidebarColorSet, isSidebarBgImage, index)}>
      {item.children
        ? item.children
        : renderMenuItemChildren(item, sidebarColorSet, isSidebarBgImage)}
    </Nav.Item>
  );
};

const renderMenu = (item, sidebarColorSet, isSidebarBgImage, index) => {
  return item.type === 'group' ? (
    <Nav.ItemGroup
      style={getStyles(item, sidebarColorSet, isSidebarBgImage, index, true)}
      key={item.path ? item.path : item.id}
      title={renderMenuItemChildren(item, sidebarColorSet, isSidebarBgImage)}>
      {item.children.map((item) =>
        renderMenuItem(item, sidebarColorSet, isSidebarBgImage, index + 1),
      )}
    </Nav.ItemGroup>
  ) : (
    <Nav.Item
      key={item.id}
      exact={item.exact}
      style={getStyles(item, sidebarColorSet, isSidebarBgImage, index)}>
      {item.children
        ? item.children
        : renderMenuItemChildren(
            item,
            sidebarColorSet,
            isSidebarBgImage,
            index,
          )}
    </Nav.Item>
  );
};

export const getRouteMenus = () => {
  const {sidebarColorSet} = useSidebarContext();
  const {isSidebarBgImage} = useSidebarContext();
  return routesConfig.map((route) =>
    renderMenu(route, sidebarColorSet, isSidebarBgImage, 0),
  );
};
