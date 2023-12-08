import Image from 'next/image';
import React, { Fragment } from 'react';

const CLIENTS = [
  { alt: 'airbnb', url: 'airbnb.png' },
  { alt: 'fed Ex', url: 'fed.png' },
  { alt: 'google', url: 'google.png' },
  { alt: 'hubspot', url: 'hubspot.png' },
  { alt: 'microsoft', url: 'microsoft.png' },
];

function TrustedClient() {
  return (
    <section className='container text-center md:-mt-20'>
      <h1 className='h3-bold'>MORE THAN 10,000 USERS USE MRR.</h1>
      <div className='mt-7 flex flex-wrap items-center justify-center gap-x-14 gap-y-5'>
        {CLIENTS.map((details) => (
          <Fragment key={details.alt}>
            <Image
              src={`/png/home/clients/${details.url}`}
              alt={details.alt}
              width={100}
              height={25}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default TrustedClient;
