import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";

export const ThemeContext = createContext({
  theme: "",
});

const App = () => {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
      </Routes>
    </ThemeContext.Provider>
  );
};

export default App;
