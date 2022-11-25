import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Task from '@/components/Tasks';
import TimerSection from '@/components/TimerSection';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div className='h-screen bg-red-400'>
      <Layout>
        <Seo />
        <TimerSection />
        <Task />
      </Layout>
    </div>
  );
}
