import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type LogoProps = {
  hasSymbol?: boolean;
  symbolSrc?: string | StaticImageData;
  srcPath?: string | StaticImageData;
  srcText?: string;
  className?: string;
};

function Logo({
  hasSymbol = false,
  symbolSrc = '',
  srcPath = '',
  srcText = '',
  className = '',
}: LogoProps) {
  return (
    <Link href='/' className={`flex items-center gap-3 ${className}`}>
      {hasSymbol && (
        <Image
          className='max-sm:hidden'
          src={symbolSrc}
          alt='logo'
          width={32}
          height={28}
        />
      )}
      <>
        {srcPath && <Image src={srcPath} alt='logo' width={76} height={17} />}
        {srcText && <p>{srcText}</p>}
      </>
    </Link>
  );
}

Logo.defaultProps = {
  hasSymbol: false,
  className: '',
  srcText: '',
  srcPath: '',
  symbolSrc: '',
};

export default Logo;
