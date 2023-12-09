import Image from 'next/image';
import React from 'react';

function HappyClients() {
  return (
    <section className='container mt-24'>
      <h1 className='h2-bold mx-auto mb-10 text-center lg:max-w-[550px]'>
        What Our <span className='text-orange-500'>Clients</span> Says
      </h1>
      <article className='mt-10 grid grid-cols-[350px_1fr] place-items-center'>
        <Image
          src='/png/home/profile-image.png'
          alt='client profile image'
          width={323}
          height={386}
        />
        <div>
          <blockquote>
            <h3 className='h3-medium max-w-lg'>
              &quot;I was looking for a perfect payment solution for my
              freelance business.I&apos;m using Payola as my primary payment
              method and I will recommend everyone who needs a best payment
              solution.&quot;
            </h3>
          </blockquote>
          <p className='text-description mt-3 flex items-center gap-2'>
            <svg
              width='22'
              height='3'
              viewBox='0 0 22 1'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='22' height='3' fill='black' />
            </svg>{' '}
            Sayed Rahman - Co Founder of Design Ocean
          </p>
        </div>
      </article>
    </section>
  );
}

export default HappyClients;
