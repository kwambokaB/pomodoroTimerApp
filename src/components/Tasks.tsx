import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import TaskList from '@/components/TaskList';

import { useTaskContext } from '@/context/tasks';

const Task = () => {
  const { clearTasks, clearCompletedTasks, currentTask } = useTaskContext();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const handleDeleteAll = () => {
    clearTasks();
  };

  const handleDeleteCompleted = () => {
    clearCompletedTasks();
  };

  return (
    <div className='section-component-div'>
      <div>{currentTask.title}</div>
      <div className='flex w-full flex-row items-center justify-between border-b-4 py-3'>
        <div className='text-lg font-bold text-white'>Task</div>

        <Menu as='div' className='relative'>
          <div>
            <Menu.Button className='flex'>
              <FiMoreVertical color='#fff' size={30} />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <Menu.Item>
                {({ active }) => (
                  <div className='flex flex-row items-center px-2'>
                    <AiFillDelete />

                    <Button
                      variant='ghost'
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                      onClick={handleDeleteCompleted}
                    >
                      Clear completed tasks
                    </Button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className='flex flex-row items-center px-2'>
                    <AiFillDelete />

                    <Button
                      variant='ghost'
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                      onClick={handleDeleteAll}
                    >
                      Clear all tasks
                    </Button>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <TaskList />
    </div>
  );
};

export default Task;
