import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../shared/logo';
import Nav from './nav';
import Button from '../shared/button';

function Header() {
  return (
    <header className='mx-auto flex max-w-[1155px] items-center justify-between px-6 py-7'>
      <div className='flex items-center gap-x-10 max-md:hidden lg:gap-x-20'>
        <Logo />
        <Nav />
      </div>

      <button type='button' className='md:hidden'>
        <Image src='/svg/menu.svg' alt='menu' width={27} height={27} />
      </button>

      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-5 border-r-[1.5px] border-solid border-dark-600 px-8'>
          <Link href='/search'>
            <Image
              src='/svg/search.svg'
              alt='search'
              width={20.23}
              height={20.26}
            />
          </Link>
          <button type='button'>
            <Image src='/svg/cart.svg' alt='search' width={20} height={20.26} />
          </button>
        </div>
        <div className='flex items-center gap-3'>
          <Button variant='sign-up' className='hidden lg:inline-block'>
            Sign Up
          </Button>
          <Button variant='primary'>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
