import cn from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type DoubleBgProps = {
  backgroundColor: string;
  backgroundWidth?: string;
  height?: string;
  hasImage: boolean;
  imgSrc?: string;
  otherClasses?: string;
  hasInnerImage: boolean;
  innerImgSrc?: string;
  innerImgWidth?: number;
  innerImgHeight?: number;
  innerImgAlt?: string;
};

function DoubleBg({
  backgroundColor = '#101512',
  backgroundWidth = '100%',
  height = '',
  hasImage = false,
  imgSrc,
  hasInnerImage = false,
  otherClasses = '',
  innerImgSrc = '',
  innerImgWidth = 0,
  innerImgHeight = 0,
  innerImgAlt = '',
  ...otherProps
}: DoubleBgProps) {
  const background = `${backgroundColor} url(${
    hasImage && imgSrc
  }) no-repeat center center`;

  return (
    <div
      className={cn(
        'absolute inset-x-0 top-0 -z-10 min-h-[550px] sm:min-h-[770px]',
        otherClasses,
      )}
      style={{ background, width: backgroundWidth, height }}
      {...otherProps}
    >
      {hasInnerImage && (
        <Image
          className='absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 max-md:w-[90%]'
          src={innerImgSrc}
          alt={innerImgAlt}
          width={innerImgWidth}
          height={innerImgHeight}
        />
      )}
    </div>
  );
}

DoubleBg.defaultProps = {
  backgroundWidth: '',
  height: '',
  imgSrc: '',
  otherClasses: '',
  innerImgSrc: '',
  innerImgWidth: 0,
  innerImgHeight: 0,
  innerImgAlt: '',
};

export default DoubleBg;
