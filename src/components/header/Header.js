import React from "react";
import { LogoIcon, MoonIcon } from "../../assets/ixons";

const Header = () => {
  return (
    <header className="header">
      <div class="container">
        <div class="logo-wrapper">
          <div class="logo">
            <LogoIcon />
            <span>JS Snippet</span>
          </div>
          <button className="icon">
            <MoonIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
