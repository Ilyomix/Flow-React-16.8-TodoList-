// @flow

import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import './header.scss';

import type { Element } from 'react';

export const Header = (): Element<'div'> => (
  <div>
    <Menu pointing>
      <Menu.Item>
        <Icon name="react" loading />
            React 16.8
      </Menu.Item>
      <Menu.Item>
        <Icon name="book" />
            TodoList: Stage 1
      </Menu.Item>
      <Menu.Item position="right">
        <Icon name="hand victory" />
            Training
      </Menu.Item>
    </Menu>
  </div>
);

export default Header;
