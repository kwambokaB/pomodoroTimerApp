import { FiMoreVertical } from 'react-icons/fi';

import TaskList from '@/components/TaskList';

const Task = () => {
  return (
    <div className='section-component-div'>
      <div className='flex w-full flex-row items-center justify-between border-b-4 py-3'>
        Task
        <FiMoreVertical color='#fff' size={30} />
      </div>
      <TaskList />
    </div>
  );
};

export default Task;
