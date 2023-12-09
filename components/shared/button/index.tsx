import React, { ReactNode } from 'react';
import cn from '@/lib/utils';
import Image from 'next/image';

function Button({
  variant = 'blue',
  className = '',
  children = null,

  ...otherProps
}: {
  variant: string;
  children: ReactNode;
  className?: string;
}) {
  switch (variant) {
    case 'primary':
      return (
        <button
          type='button'
          className={cn(
            'rounded-3xl border-none bg-orange-500 px-7 py-3 text-white',
            className,
          )}
          {...otherProps}
        >
          {children}
        </button>
      );
    case 'CTA':
      return (
        <button
          type='button'
          className={cn(
            'rounded-[30px] flex items-center gap-6 border-none bg-green-400 px-7 py-4 text-white',
            className,
          )}
          {...otherProps}
        >
          {children}
        </button>
      );
    case 'sign-up':
      return (
        <button
          type='button'
          className={cn(
            'rounded-3xl border-none text-white px-7 py-3 hover:bg-dark-400 hover:text-white',
            className,
          )}
          {...otherProps}
        >
          {children}
        </button>
      );
    case 'blog-btn':
      return (
        <button type='button' className='flex items-center justify-end gap-4'>
          <span className='text-lg font-semibold transition-all hover:text-blue-400'>
            {children}
          </span>
          <div className='grid h-[30px] w-[30px] place-items-center rounded-full bg-orange-500'>
            <Image
              src='/svg/arrow-right-direction.svg'
              alt='arrow right direction'
              width={16}
              height={16}
            />
          </div>
        </button>
      );
    default:
      return null;
  }
}

Button.defaultProps = {
  className: '',
};

export default Button;
