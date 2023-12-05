import Button from '@/components/shared/button';
import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <section className='container relative mt-8 text-center'>
      <h1 className='h1-bold'>
        We Help You To
        <br />
        Grow Your <span className='text-yellow-500'>Business</span>
      </h1>
      <p className='mx-auto mb-7 mt-3 max-w-screen-sm text-center text-lg text-green-100'>
        I help Saas business businesses convert visitors into customer through
        powerful positioning and crystal-clear messaging.
      </p>

      <Button variant='primary'>GET STARTED</Button>

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
