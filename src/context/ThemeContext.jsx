import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [openTheme, setOpenTheme] = useState(true);
  const [themColor, setThemeColor] = useState('default');

  const handleThemeOpen = () => {
    setOpenTheme((prev) => !prev);
  };

  const handleThemeColor = (color) => {
    setThemeColor(color);
  };

  const value = {
    isNavOpen,
    setIsNavOpen,
    openColors,
    setOpenColors,
    openTheme,
    setOpenTheme,
    themColor,
    setThemeColor,
    handleThemeOpen,
    handleThemeColor,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
