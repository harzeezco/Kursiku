import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href='/'>
      <Image src='/png/shared/logo.png' alt='logo' width={107} height={29} />
    </Link>
  );
}

export default Logo;
