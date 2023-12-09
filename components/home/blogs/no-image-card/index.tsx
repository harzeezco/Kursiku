import Button from '@/components/shared/button';
import React from 'react';

function NoImageCard({ details }: { details: string }) {
  return (
    <div className='grid max-w-[400px] place-items-start gap-4 rounded-[10px] bg-gray-50 p-5'>
      <h3 className='h3-semi-bold'>{details}</h3>

      <Button variant='blog-btn'>READ MORE</Button>
    </div>
  );
}

export default NoImageCard;
