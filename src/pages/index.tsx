import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div className='bg-red-400'>
      <Layout>
        <Seo />

        <main>
          <section>
            <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
              <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
              <p className='mt-2 text-sm text-gray-800'>
                A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link
                component, pre-configured with Husky{' '}
              </p>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
