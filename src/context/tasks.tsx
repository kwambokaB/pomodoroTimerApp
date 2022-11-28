import { createContext, ReactNode, useContext, useState } from 'react';

import { entry, Task } from '@/components/interfaces';
const TaskContext = createContext<TasksContext | null>(null);

interface Props {
  children: ReactNode;
}

interface TasksContext {
  task: Task;
  currentTask: entry;
  AddTask: (entry: entry) => void;
  removeTask: (entry: entry) => void;
  clearTasks: () => void;
  updateCurrentTask: (item: entry) => void;
  changeTaskStatus: (entry: entry, value: string) => void;
  clearCompletedTasks: () => void;
}

export function TaskProvider({ children }: Props) {
  const [task, setTask] = useState<Task>([]);
  const [currentTask, setCurrentTask] = useState<entry>({
    title: '',
    pomodoros: 0,
    status: 'active',
  });

  const AddTask = (newTask: entry) => {
    const all: Task = [...task, newTask];
    setTask(all);
  };

  const removeTask = (tsk: entry) => {
    const newList = task.filter((t) => t !== tsk);
    setTask(newList);
  };

  const clearCompletedTasks = () => {
    const newList = task.filter((t) => t[0].status !== 'completed');
    setTask(newList);
  };

  const changeTaskStatus = (tsk: entry, state: string) => {
    task.map((t) => {
      if (t === tsk) {
        t[0].status = state;
      }
    });
  };

  const updateCurrentTask = (itm: entry) => {
    setCurrentTask(itm);
  };

  const clearTasks = () => {
    setTask([]);
  };
  return (
    <TaskContext.Provider
      value={{
        task,
        AddTask,
        removeTask,
        clearTasks,
        changeTaskStatus,
        clearCompletedTasks,
        updateCurrentTask,
        currentTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
