import React from "react";
import SearchInput from "../../../Components/SearchInput";
import DarkMode from "../../../Components/DarkMode";
import LanguageSelector from "../../../Components/LanguageSelector";
import "./hero.css";

export function ThemeProvider({}){
  return 
}

export default function Hero() {
  return (
    <div className="container">
      <div className="search-input-container">
        <SearchInput />
      </div>
      <div className="header">
        <div
          style={{
            width: "15em",
            height: "15em",
            outline: "1px solid red",
            color: "red",
          }}
        >
          Yo Farm
        </div>
        <div className="utility-holder">
          <LanguageSelector />
          <DarkMode />
        </div>
      </div>
      <div className="info-section">
        <div className="left-wrapper">
          <div className="title-holder">
            <div>Yo Farm Supply Management System</div>
            <div className="explore-button"></div>
          </div>
        </div>
        <div className="right-wrapper"></div>
      </div>
    </div>
  );
}
