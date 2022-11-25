import { createContext, ReactNode, useContext, useState } from 'react';

interface ThemeContext {
  theme: string;
  changeTheme: (theme: string) => void;
}

interface Props {
  children: ReactNode;
}

const Context = createContext<ThemeContext | null>(null);

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState('worktime');
  const changeTheme = (val: string) => {
    setTheme(val);
  };
  return <Context.Provider value={{ theme, changeTheme }}>{children}</Context.Provider>;
}

export function useThemeContext() {
  return useContext(Context);
}
