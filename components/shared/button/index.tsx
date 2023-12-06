import React, { ReactNode } from 'react';
import cn from '@/lib/utils';

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
            'rounded-3xl border-none bg-orange-500 px-7 py-3 text-white',
            className,
          )}
          {...otherProps}
        />
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
        />
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
