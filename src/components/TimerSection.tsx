import { useCallback } from 'react';

import Button from '@/components/buttons/Button';
import useCountdown from '@/components/useCountDown';

import { modes } from '@/constanst';
import { useTaskContext } from '@/context/tasks';
import { useThemeContext } from '@/context/theme';
import { formatTime } from '@/helpers';

const TimerSection = () => {
  const { changeTheme, theme } = useThemeContext();
  const { currentTask } = useTaskContext();
  const { ticking, start, stop, reset, timeLeft } = useCountdown({
    minutes: modes[theme].time,
    onStart: () => {
      // console.log('started');
    },
    onStop: () => {
      // console.log('stopped');
    },
    onComplete: () => {
      next();
      // console.log('completed');
    },
  });

  const toggleTimer = useCallback(() => {
    if (ticking) {
      stop();
    } else {
      start();
    }
  }, [start, stop, ticking]);

  const jumpTo = useCallback(
    (currMode: string) => {
      reset();
      changeTheme(currMode);
    },
    [reset]
  );

  const next = useCallback(() => {
    if (theme === 'worktime') {
      jumpTo('shortbreak');
    } else if (theme === 'shortbreak') {
      if (currentTask.pomodoros > 1) {
        jumpTo('worktime');
      }
    } else if (theme === 'longbreak') {
      if (currentTask.pomodoros > 1) {
        jumpTo('worktime');
      }
    }
  }, [jumpTo, theme, start]);

  return (
    <div className='mx-20 mt-10 mb-5 flex flex-col items-center justify-center rounded-md bg-white/20 px-20 py-5 text-white'>
      <div>
        <ul className='flex cursor-pointer items-center justify-between space-x-4'>
          <li className='text-lg font-semibold text-white' onClick={() => changeTheme('worktime')}>
            Pomodoro
          </li>
          <li
            className='text-lg font-semibold text-white'
            onClick={() => changeTheme('shortbreak')}
          >
            Short Break
          </li>
          <li className='text-lg font-semibold text-white' onClick={() => changeTheme('longbreak')}>
            Long Break
          </li>
        </ul>
      </div>
      <div className='pt-10 pb-5'>
        <p className='text-9xl'>{formatTime(timeLeft)}</p>
      </div>
      <Button variant='light'>
        <div className='text-xl font-bold text-red-400' onClick={toggleTimer}>
          {ticking ? 'Stop' : 'Start'}
        </div>
      </Button>
    </div>
  );
};

export default TimerSection;
