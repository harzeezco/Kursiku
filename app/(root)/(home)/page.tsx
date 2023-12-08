import React from 'react';
import TrustedClient from '@/components/home/trusted-clients';
import About from '@/components/home/about';
import Services from '@/components/home/services';

function Home() {
  return (
    <main className=''>
      <TrustedClient />
      <About />
      <Services />
    </main>
  );
}

export default Home;
