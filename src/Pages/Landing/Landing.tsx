import React from "react";
import Hero from "./Component/Hero";
import "./Util/landing.css";
import { useTheme } from "../../Context/ThemeContext";

export function Footer({}) {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div>
          <div>Yo Farm</div>
          <div className="socials">
            <div>Contact us</div>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Telegram</div>
          </div>
        </div>
        <div>Project</div>
        <div>Company</div>
        <div>Movement</div>
      </div>
      {/* <div className="footer-title">Yo Farm Copyright|2024</div> */}
    </div>
  );
}

export default function Landing() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <div className={`hero  ${theme}`}>
        <Hero />
      </div>

      <div className="products"></div>
      <div className="partners">
        <h1>{`current theme: ${theme}`}</h1>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
