import React from "react";

import "./App.css";
import Landing from "./Pages/Landing/Landing";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Landing />
      </ThemeProvider>
    </div>
  );
}

export default App;
