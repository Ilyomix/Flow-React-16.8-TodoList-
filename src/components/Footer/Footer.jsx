// @flow

import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './footer.scss';

import type { Element } from 'react';

const Footer = (): Element<'div'>  => {
  const year: number = new Date().getFullYear();

  return (
    <div>
      <Menu borderless className="footer-playground">
        <Menu.Item position="right">
          <Icon name="book" />
          <b>Playground</b>
          <pre> </pre>
            created with
          <pre> </pre>
          <Icon name="heart" color="red" />
            by Inovans
          <pre> </pre>
          <Icon name="copyright" />
          { year }
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Footer;
