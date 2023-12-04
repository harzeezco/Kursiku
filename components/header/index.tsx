import React from 'react';
import Image from 'next/image';

import Logo from '../shared/logo';
import Nav from './nav';

import OtherMenu from './other-menu';

function Header() {
  return (
    <header className='container flex  items-center justify-between py-7'>
      <div className='flex items-center gap-x-10 max-md:hidden lg:gap-x-20'>
        <Logo />
        <Nav />
      </div>

      <button type='button' className='md:hidden'>
        <Image src='/svg/menu.svg' alt='menu' width={27} height={27} />
      </button>

      <OtherMenu />
    </header>
  );
}

export default Header;
