import Button from '@/components/shared/button';
import Image from 'next/image';
import React from 'react';

const FEATURESDETAILS = [
  {
    title: 'Automated expenses',
    description:
      'Digitize your expense policies so you can control and approve spend before.',
  },
  {
    title: 'Pay Faster than Ever',
    description:
      'Digitize your expense policies so you can control and approve spend before.',
  },
  {
    title: 'Get a Hoslistic View',
    description:
      'Digitize your expense policies so you can control and approve spend before.',
  },
];

function Features() {
  const background = '#103C44 no-repeat center center';

  return (
    <section
      className='features-container relative mt-24'
      style={{ background, width: '100%', height: '100%' }}
    >
      <div className='container relative flex items-center justify-between gap-8 p-20'>
        <div>
          <h1 className='h2-bold mx-auto mb-3 text-white lg:max-w-[550px]'>
            Put expenses on easy mode and{' '}
            <span className='text-orange-500'>save tons of money</span>
          </h1>
          <ul className='mt-8 grid gap-7 text-white'>
            {FEATURESDETAILS.map((details, idx) => (
              <li className='grid grid-cols-[4rem_1fr] place-content-center gap-8'>
                <div className='grid h-20 w-20 place-items-center rounded-full bg-green-800 text-2xl font-semibold text-white'>
                  {idx + 1}
                </div>
                <div>
                  <h3 className='h4-semi-bold mb-1'>{details.title}</h3>
                  <p className='text-green-100 md:max-w-[430px]'>
                    {details.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='grid place-items-end'>
          <Button variant='primary'>
            <span className='text-[22px] font-semi-bold'>Get Started</span>
          </Button>
          <Image
            src='/png/home/image.png'
            alt='a man with a laptop'
            width={470}
            height={470}
            className='mt-16'
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
