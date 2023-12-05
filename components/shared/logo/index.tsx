import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-3'>
      <Image
        className='max-sm:hidden'
        src='/png/shared/logo-icon.png'
        alt='logo'
        width={32}
        height={28}
      />
      <Image
        src='/png/shared/logo-text.png'
        alt='logo'
        width={76}
        height={17}
      />
    </Link>
  );
}

export default Logo;
