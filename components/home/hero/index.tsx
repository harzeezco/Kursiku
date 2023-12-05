import Button from '@/components/shared/button';
import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <section className='container relative mb-10'>
      <Image
        className='absolute -z-10 h-full w-[90%] rounded-[20px] lg:w-[95%]'
        src='/png/home/home-desktop.png'
        alt='landing image'
        width={1170}
        height={1170}
      />
      <div className='max-w-lg px-7 py-14 pb-32 lg:translate-x-1/4 lg:pl-4'>
        <h1 className='h1-bold mb-5'>
          Find the Best
          <br />
          Home Furniture for Your Room
        </h1>
        <p className='font-medium text-white opacity-[80%] md:text-xl lg:pr-4 lg:text-dark-200'>
          Accent chairs at Herman Miller include a clear mid-century modern
          accent
        </p>
        <div className='mr-7 mt-9 flex flex-col items-start gap-6 md:flex-row lg:mt-14 lg:items-center lg:justify-between'>
          <Button variant='primary'>Shop now</Button>

          <div className='flex gap-3'>
            <div className='border-r-[1.7px] border-solid border-r-dark-500 pr-3'>
              <p className='h3-semibold mb-2'>20k+</p>
              <span>Collections</span>
            </div>
            <div>
              <p className='h3-semibold mb-2'>16k</p>
              <span>Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
