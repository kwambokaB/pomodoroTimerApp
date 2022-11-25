import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { TaskProvider } from '@/context/tasks';
import { ThemeProvider } from '@/context/theme';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default MyApp;
