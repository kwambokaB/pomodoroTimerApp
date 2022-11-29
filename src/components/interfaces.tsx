export interface entry {
  title: string;
  pomodoros: number;
  status: string;
}

export type Task = entry[];

export interface Mode {
  name: string;
  time: number;
  theme: string;
}
