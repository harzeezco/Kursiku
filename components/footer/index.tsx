import React from 'react';
import { FOOTER_LINKS } from '@/lib/placeholder';
import Image from 'next/image';
import Logo from '../shared/logo';
import Button from '../shared/button';

function Footer() {
  return (
    <footer className='mt-24 bg-dark-900 text-white lg:px-24'>
      <div className='container py-24'>
        <Logo />
        <div className='mt-10 flex justify-around'>
          <div className='flex gap-10'>
            {FOOTER_LINKS.map((details) => (
              <div key={details.id}>
                <h4 className='mb-4 text-[22px] font-medium'>
                  {details.title}
                </h4>
                <ul className='grid place-items-start gap-3'>
                  {details.links.map((link) => (
                    <li className='text-lg font-medium text-gray-300'>
                      {link.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <div className='flex max-w-[403px] items-center justify-around gap-4'>
              <Image
                src='/svg/message.svg'
                alt='message'
                height={24}
                width={24}
              />
              <h4 className='font-publicSans text-[22px] font-semibold'>
                Join our newsletter
              </h4>
              <Image src='/svg/quote.svg' alt='quote' height={30} width={38} />
            </div>

            <div className='mt-5 rounded-[41px] bg-dark-350'>
              <input
                type='text'
                className='border-none bg-transparent p-3 outline-none placeholder:font-medium placeholder:text-gray-300'
                placeholder='hello@gmail.com'
              />
              <Button variant='primary' className=''>
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
