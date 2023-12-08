import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div className='container mt-24 flex items-center justify-between gap-x-3 max-md:flex-col'>
      <Image
        src='/png/home/admin.png'
        alt='admin'
        width={677}
        height={522}
        className='md:flex-[1.5]'
      />
      <div className='lg:flex-1'>
        <h1 className='h2-bold mb-3'>
          Does your website suck at acquiring{' '}
          <span className='text-orange-500'>customers</span>?
        </h1>
        <p className='text-description'>
          Are ?MA constantly cosskIng up new acquisition stewing-es but failing
          to see the results? There&apos;s probably a tonne of pressure on you
          to get more But design is hard. Folding the right customers Is hard.{' '}
        </p>
      </div>
    </div>
  );
}

export default About;
