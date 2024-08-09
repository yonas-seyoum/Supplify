import React from "react";
import { useTheme } from "../Context/ThemeContext";

export default function DarkMode() {
  const { toggleTheme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: "#e28743",
        height: "30px",
        width: "60px",
        borderRadius: "2em",
        color: "white",
      }}
    >
      <button onClick={toggleTheme}>THEME</button>
    </div>
  );
}
