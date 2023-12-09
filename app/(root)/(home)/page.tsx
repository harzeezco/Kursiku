import React from 'react';
import TrustedClient from '@/components/home/trusted-clients';
import About from '@/components/home/about';
import Services from '@/components/home/services';
import BusinessGrowth from '@/components/home/business-growth';
import Features from '@/components/home/features';
import Blog from '@/components/home/blogs';

function Home() {
  return (
    <main className=''>
      <TrustedClient />
      <About />
      <Services />
      <BusinessGrowth />
      <Features />
      <Blog />
    </main>
  );
}

export default Home;
