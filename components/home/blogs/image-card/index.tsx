import React from 'react';
import Image from 'next/image';
import Button from '@/components/shared/button';

function ImageCard() {
  return (
    <div className='grid w-fit max-w-[510px] gap-3 rounded-[10px] bg-gray-50 p-5 py-7'>
      <Image
        src='/png/home/blog.png'
        alt='a man a having a call'
        height={350}
        width={500}
      />

      <h3 className='h3-bold'>
        Do better than a business bank and manage finance like a pro
      </h3>

      <Button variant='blog-btn'>READ MORE</Button>
    </div>
  );
}

export default ImageCard;
