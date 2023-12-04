import React from 'react';
import { NAVLINKS } from '@/lib/placeholder';
import NavLink from './link';

function Nav() {
  return (
    <nav>
      <ul className='flex items-center gap-7'>
        {NAVLINKS.map((details) => (
          <NavLink key={details.href} {...details} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
