import Button from '@/components/shared/button';
import React from 'react';

function Hero() {
  return (
    <section className='home-hero-bg container relative mb-10'>
      <div className='hero-img relative max-w-lg py-14 pb-32 lg:translate-x-1/4 lg:pl-4'>
        <h1 className='h1-bold mb-5'>
          Find the Best Home Furniture for Your Room
        </h1>
        <p className='text-xl font-medium text-dark-200 lg:pr-4'>
          Accent chairs at Herman Miller include a clear mid-century modern
          accent
        </p>
        <div className='mt-14 flex items-center justify-between mr-7'>
          <Button variant='primary'>Shop now</Button>

          <div className='flex items-center gap-8'>
            <div>
              <p>20k+</p>
              <span>Collections</span>
            </div>
            <div>
              <p>16k</p>
              <span>Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
