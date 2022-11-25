import { createContext, ReactNode, useContext, useState } from 'react';

import { entry, Task } from '@/components/interfaces';
const TaskContext = createContext<TasksContext | null>(null);

interface Props {
  children: ReactNode;
}

interface TasksContext {
  task: Task;
  AddTask: (entry: entry) => void;
  removeTask: (entry: entry) => void;
  clearTasks: () => void;
}

export function TaskProvider({ children }: Props) {
  const [task, setTask] = useState<Task>([]);

  const AddTask = (newTask: entry) => {
    const all: Task = [...task, newTask];
    console.log(all);
    setTask(all);
  };

  const removeTask = (tsk: entry) => {
    const newList = task.filter((t) => t !== tsk);
    setTask(newList);
  };

  const clearTasks = () => {
    setTask([]);
  };
  return (
    <TaskContext.Provider value={{ task, AddTask, removeTask, clearTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
