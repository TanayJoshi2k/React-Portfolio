import { React, useState, useEffect } from "react";
import classes from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

import { createContext } from "react";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <Navbar />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
