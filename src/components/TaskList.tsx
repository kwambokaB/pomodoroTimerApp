import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { IoMdAddCircle, IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import { useTaskContext } from '@/context/tasks';

const TaskList = () => {
  const { AddTask, removeTask, clearTasks, task } = useTaskContext();

  const [title, setTittle] = useState('test');
  const [pCount, setPCount] = useState(1);
  const [showAddCard, setShowAddCard] = useState(false);
  const [showEditCard, setShoeEditCard] = useState(false);
  const [taskList, setTaskList] = useState(task);

  const handleSave = () => {
    const newTask = [
      {
        title,
        pomodoros: pCount,
      },
    ];
    AddTask(newTask);
    setShowAddCard(false);
  };

  const handleDelete = (tsk) => {
    console.log('delete');
    removeTask(tsk);
    setShowAddCard(false);
  };

  const handleClear = () => {
    clearTasks();
  };

  useEffect(() => {
    console.log('dfg', task);
  }, []);

  const TaskItem = ({ item }) => {
    return (
      <div className=' mb-2 flex w-full flex-row justify-between rounded-[7px] bg-white px-2 py-4'>
        <div className='flex flex-row items-center px-2'>
          <AiFillCheckCircle
            style={{ paddingRight: '10px', color: 'slategray', fontSize: '35px' }}
          />
          {item[0].title}
        </div>
        <div>
          <FiMoreVertical color='gray' size={30} />
        </div>
      </div>
    );
  };

  const AddTaskButton = () => {
    return (
      <button
        type='button'
        className='mb-2 flex w-full flex-row items-center justify-center rounded-[7px] border-2 border-dashed border-slate-100 bg-transparent px-2 py-4'
        onClick={() => setShowAddCard(true)}
      >
        <IoMdAddCircle color='#fff' size={25} />
        <p className='px-2 text-xl font-bold text-white'>Add</p>
      </button>
    );
  };

  const TaskModal = () => {
    return (
      <div className='flex  w-full flex-col rounded-[7px] bg-white pt-5 shadow-sm'>
        <div className='px-4'>
          <input
            type='text'
            className='w-full border-none py-1 placeholder:font-bold placeholder:italic placeholder:text-slate-700/40 focus:ring-0'
            placeholder='What are you working on'
            onChange={(e) => setTittle(e.target.value)}
          />
        </div>
        <div className='py-2 px-6 font-bold'>Est Pomodoros</div>
        <div className='flex flex-row items-center px-4'>
          <input
            type='text'
            className='rounded-[7px] border-none bg-slate-100 py-3 text-center placeholder:font-bold placeholder:italic placeholder:text-slate-700/40 focus:ring-0'
            placeholder=''
            value={pCount}
            onChange={(e) => setPCount(Number(e.target.value))}
          />
          <button className='mx-3 bg-white shadow-md' onClick={() => setPCount(pCount + 1)}>
            <IoMdArrowDropup color='gray' size={35} />
          </button>
          <button className='bg-white shadow-md'>
            <IoMdArrowDropdown color='gray' size={35} onClick={() => setPCount(pCount - 1)} />
          </button>
        </div>
        <div className='mt-5 flex w-full flex-row items-center justify-between rounded-[7px] bg-slate-200 py-5 px-4'>
          <div className='font-semibold text-slate-700/70' onClick={handleDelete}>
            Delete
          </div>
          <div>
            <button
              className='px-5 font-semibold text-slate-700/70'
              onClick={() => setShowAddCard(false)}
            >
              Cancel
            </button>
            <button
              className='rounded-[5px] bg-slate-500 px-5 py-2 text-white'
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='flex w-full flex-col items-center justify-between py-3'>
      {task?.map((t) => (
        <TaskItem item={t} />
      ))}

      {showAddCard ? TaskModal() : <AddTaskButton />}
    </div>
  );
};

export default TaskList;
