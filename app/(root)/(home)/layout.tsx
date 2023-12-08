import Hero from '@/components/home/hero';
import HeaderHeroBg from '@/components/shared/double-bg';
import React, { ReactNode } from 'react';

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderHeroBg
        backgroundColor='#101512'
        hasImage
        imgSrc='/png/home/hero-blur.png'
        hasInnerImage
        innerImgSrc='/png/home/line.png'
        innerImgAlt='line'
        innerImgWidth={865}
        innerImgHeight={602}
      />
      <Hero />
      {children}
    </>
  );
}

export default layout;
