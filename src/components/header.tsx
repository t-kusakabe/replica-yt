import * as React from 'react';

import ButtonComponent from './utils/button';

const Header = (props: any) => (
  <header>
    <input
      type='text'
      placeholder="検索"
    />
    <ButtonComponent icon='search' />
  </header>
);

export default Header;
