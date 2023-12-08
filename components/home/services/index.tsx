import Button from '@/components/shared/button';
import Image from 'next/image';
import React from 'react';

function Services() {
  const background = "url('/png/home/services-bg.png') no-repeat center center";

  return (
    <section
      className='mt-24'
      style={{ background, width: '100%', height: '100%' }}
    >
      <div className='container grid place-items-center gap-10 p-14 md:grid-cols-2'>
        <div className=''>
          <h1 className='h2-bold mb-3'>
            A website that your{' '}
            <span className='text-orange-500'>customers</span> is killing your
            business
          </h1>
          <p className='text-description mb-9'>
            Yet hod any tor iraxening assistance ∎nulgerice unpleasIng. Nol
            thoughts WI exercise blessing. Indulgence way everything icy
            allefation boistecous the attachment.
          </p>

          <Button variant='CTA'>
            <span className='text-xl font-medium'>READ MORE</span>{' '}
            <div className='rounded-full bg-green-350 p-4'>
              <Image
                src='/svg/right-arrow.svg'
                alt='right-arrow'
                width={8}
                height={12}
              />
            </div>
          </Button>
        </div>
        <Image
          src='/png/home/status.png'
          alt='status'
          width={580}
          height={604}
        />
      </div>
    </section>
  );
}

export default Services;
