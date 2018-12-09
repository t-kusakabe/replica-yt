import * as React from 'react';
const logo = require('../../img/logo.png');

import ButtonComponent from './utils/button';

const Header = () => (
  <header>
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
  </header>
);

export default Header;
