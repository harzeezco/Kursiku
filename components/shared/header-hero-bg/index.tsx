import Image from 'next/image';
import React from 'react';

function HeaderHeroBg() {
  return (
    <div className='bg absolute inset-x-0 top-0 -z-10 min-h-[550px] bg-dark-600 sm:min-h-[770px]'>
      <Image
        className='absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 max-md:w-[90%]'
        src='/png/home/line.png'
        alt='line'
        width={865}
        height={602}
      />
    </div>
  );
}

export default HeaderHeroBg;
