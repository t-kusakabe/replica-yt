import * as React from 'react';
const logo = require('../../img/logo.png');

import ButtonComponent from './utils/button';

const Header = () => (
  <header>
    <ButtonComponent icon='bars' />
    <img
      className="logo"
      src={logo}
      alt='logo.png'
    />
    <input
      type='text'
      placeholder="検索"
    />
    <ButtonComponent icon='search' />
    <ButtonComponent icon='video' />
    <ButtonComponent icon='th' />
    <ButtonComponent icon='comment' />
    <ButtonComponent icon='bell' />
  </header>
);

export default Header;
