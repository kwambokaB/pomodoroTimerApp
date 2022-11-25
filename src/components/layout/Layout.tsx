import * as React from 'react';

import Header from '@/components/layout/Header';
import SectionContainer from '@/components/SectionContainer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SectionContainer>
      <div className='flex flex-col justify-between'>
        <Header />
        {children}
      </div>
    </SectionContainer>
  );
}
