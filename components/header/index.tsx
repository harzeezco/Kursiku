import React from 'react';
import Logo from '../shared/logo';
import Nav from './nav';
import LeftBars from './left-bars';

function Header() {
  return (
    <header className='relative z-50 mx-auto flex max-w-[1155px] items-center justify-between px-6 py-7'>
      <Logo hasLogoIcon />
      <Nav />
      <LeftBars />
    </header>
  );
}

export default Header;
