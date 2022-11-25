import clsx from 'clsx';
import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Task from '@/components/Tasks';
import TimerSection from '@/components/TimerSection';

import { useThemeContext } from '@/context/theme';

const modes = {
  worktime: 'min-h-screen bg-red-400',
  shortbreak: 'min-h-screen bg-teal-400',
  longbreak: 'min-h-screen bg-cyan-400',
};

export default function HomePage() {
  const { theme } = useThemeContext();
  return (
    <div className={clsx(modes[theme])}>
      <Layout>
        <Seo />
        <TimerSection />
        <Task />
      </Layout>
    </div>
  );
}
