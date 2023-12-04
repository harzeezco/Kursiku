import React from 'react';
import Link from 'next/link';
import { NavLinkProps } from '@/types';

function NavLink({ link = '', href = '/' }: NavLinkProps) {
  return (
    <Link className='text-lg font-medium' href={href}>
      {link}
    </Link>
  );
}

export default NavLink;
