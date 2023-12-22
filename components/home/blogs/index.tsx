import React from 'react';
import NoImageCard from './no-image-card';
import ImageCard from './image-card';

const NoImageCARDDETAILS = [
  'Banks impose heavy fees for transacting ab road.',
  'Choose to invest some or all of your account balance.',
  'Get a credit card that helps build business credit.',
];

function Blog() {
  return (
    <section className='container mt-24'>
      <h1 className='h2-bold mx-auto mb-10 text-center lg:max-w-[550px]'>
        Keep update with our finance{' '}
        <span className='text-orange-500'>management</span> blog{' '}
      </h1>
      <div className='flex items-center justify-center gap-8'>
        <ImageCard />

        <div className='grid gap-6'>
          {NoImageCARDDETAILS.map((details) => (
            <NoImageCard key={details} details={details} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
