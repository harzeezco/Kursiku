import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

function Button({
  variant = 'blue',
  className,
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
            'rounded-[10px] border-none bg-dark-600 px-9 py-3 text-white',
            className,
          )}
          {...otherProps}
        />
      );
    case 'sign-up':
      return (
        <button
          type='button'
          className={cn(
            'rounded-[10px] border-[1.5px] border-none bg-white  px-9 py-3 text-black hover:bg-dark-400 hover:text-white',
            className,
          )}
          {...otherProps}
        />
      );
    case 'blue':
      return (
        <button
          type='button'
          className={cn(
            'btn-blue flex w-auto items-center justify-center rounded-[25px] border-none bg-blue-700 px-[30px] py-3 font-semibold text-white transition-pop-up',
          )}
          {...otherProps}
        />
      );
    default:
      return null;
  }
}

Button.defaultProps = {
  className: '',
};

export default Button;
