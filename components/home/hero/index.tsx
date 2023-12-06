import Button from '@/components/shared/button';
import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <section className='container relative mt-8 grid place-items-center'>
      <h1 className='h1-bold text-center'>
        We Help You To
        <br />
        Grow Your <span className='text-yellow-500'>Business</span>
      </h1>
      <p className='mx-auto mb-7 mt-3 text-center font-inter text-lg text-green-100 md:max-w-[530px]'>
        We help Saas businesses convert visitors into customer through powerful
        positioning and crystal-clear messaging.
      </p>

      <Button variant='CTA'>
        <span className='font-bold'>GET STARTED</span>{' '}
        <div className='rounded-full bg-white p-3'>
          <Image
            src='/svg/arrow.svg'
            alt='right arrow'
            width={14}
            height={14}
          />
        </div>
      </Button>

      <Image
        className='mt-10'
        src='/png/home/dashboard-ui.png'
        alt='dashboard ui'
        width={1034}
        height={659}
      />
    </section>
  );
}

export default Hero;
