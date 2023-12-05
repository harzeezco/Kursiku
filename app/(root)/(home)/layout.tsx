import Hero from '@/components/home/hero';
import HeaderHeroBg from '@/components/shared/header-hero-bg';
import React, { ReactNode } from 'react';

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderHeroBg smHeight='[550px]' lgHeight='[770px]' />
      <Hero />
      {children}
    </>
  );
}

export default layout;
