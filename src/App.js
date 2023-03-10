import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Post from "./components/post/Post";

// Create Context
export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark,
    setIsDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      <Header />
      <Post />
    </ThemeContext.Provider>
  );
}

export default App;
