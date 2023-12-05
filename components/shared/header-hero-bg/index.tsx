import Image from 'next/image';
import React from 'react';

function HeaderHeroBg({
  smHeight = '[550px]',
  lgHeight = '[770px]',
}: {
  smHeight: String;
  lgHeight: String;
}) {
  return (
    <div
      className={`bg sm:min-h-${lgHeight} min-h- absolute inset-x-0 top-0 -z-10${smHeight} bg-dark-600`}
    >
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
