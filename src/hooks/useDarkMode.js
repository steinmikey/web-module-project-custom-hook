import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initValue);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
