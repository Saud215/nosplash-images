import { createContext, useContext, useEffect, useState } from "react";

const TheContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("isDarkTheme");

  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === "true";
};

export const ProviderComponent = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(getInitialDarkMode());
  const [searchText, setSearchText] = useState("cat");

  const toggleDarkTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem("isDarkTheme", newTheme);
  };

  useEffect(() => {
    // const bodyElement = document.querySelector("body");
    // bodyElement.classList.toggle("dark-theme", newTheme);
    document.body.classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);

  return (
    <TheContext.Provider
      value={{ darkTheme, toggleDarkTheme, searchText, setSearchText }}
    >
      {children}
    </TheContext.Provider>
  );
};
// above is the implementation of the global context setup
// below written is a custom hook for better usage and readability of the use useContext hook
export const useGlobalContext = () => useContext(TheContext);
