import Button from '@/components/shared/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function OtherMenu() {
  return (
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
  );
}

export default OtherMenu;
