import Button from '@/components/shared/button';
import Image from 'next/image';
import React from 'react';

function LeftBars() {
  return (
    <div className='flex items-center gap-3'>
      <Button className='max-sm:hidden' variant='sign-up'>
        Sign Up
      </Button>
      <Button variant='primary'>Login</Button>
      <button type='button' className='md:hidden'>
        <Image src='/svg/menu.svg' alt='menu' width={27} height={27} />
      </button>
    </div>
  );
}

export default LeftBars;
