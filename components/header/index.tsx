import React from 'react';
import Image from 'next/image';
import Logo from '../shared/logo';
import Nav from './nav';
import Button from '../shared/button';

function Header() {
  return (
    <header className='relative z-50 mx-auto flex max-w-[1155px] items-center justify-between px-6 py-7'>
      <Logo />

      <Nav />

      <div className='flex items-center gap-3'>
        <Button className='max-sm:hidden' variant='sign-up'>
          Sign Up
        </Button>
        <Button variant='primary'>Login</Button>
        <button type='button' className='md:hidden'>
          <Image src='/svg/menu.svg' alt='menu' width={27} height={27} />
        </button>
      </div>
    </header>
  );
}

export default Header;
