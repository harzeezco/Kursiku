import Image from 'next/image';
import React from 'react';

const BUSINESSGROWTHCARDDETAILS = [
  {
    imgSrc: 'employees-card.png',
    imgAlt: 'employees card',
    title: 'Automated expenses',
    description:
      'invoices by forwarding a straight email, manage all your bills in one place, and never pay trasaction fees.',
  },
  {
    imgSrc: 'profile-card.png',
    imgAlt: 'employees card',
    title: 'Track and pay invoices',
    description:
      'Create and send professional-looking invoices in seconds.Automated templates and schedules.',
  },
];

function BusinessGrowth() {
  return (
    <section className='container mt-24'>
      <h1 className='h2-bold mx-auto mb-10 text-center lg:max-w-[550px]'>
        Simplify your <span className='text-orange-500'>finance</span> stack for
        your business growth
      </h1>

      <div className='flex flex-wrap items-center justify-center gap-10'>
        {BUSINESSGROWTHCARDDETAILS.map((details) => (
          <div>
            <Image
              src={`/png/home/${details.imgSrc}`}
              alt={details.imgAlt}
              width={354}
              height={470}
            />
            <h3 className='h3-semi-bold mb-2 mt-4'>{details.title}</h3>
            <p className='text-description max-w-sm'>{details.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BusinessGrowth;
