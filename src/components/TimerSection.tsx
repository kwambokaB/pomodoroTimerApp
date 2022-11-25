import Button from '@/components/buttons/Button';

const TimerSection = () => {
  return (
    <div className='mx-20 mt-10 mb-5 flex flex-col items-center justify-center rounded-md bg-white/20 px-20 py-5 text-white'>
      <div>
        <ul className='flex cursor-pointer items-center justify-between space-x-4'>
          <li className='text-lg font-semibold text-white'>Pomodoro</li>
          <li className='text-lg font-semibold text-white'>Short Break</li>
          <li className='text-lg font-semibold text-white'>Long Break</li>
        </ul>
      </div>
      <div className='pt-10 pb-5'>
        <p className='text-9xl'>15:00</p>
      </div>
      <Button variant='light'>
        <div className='text-xl font-bold text-red-400'>Start</div>
      </Button>
    </div>
  );
};

export default TimerSection;
