import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header w-full p-2">
      <h1> Navbar</h1>
      <div className="header__logo">
        <img
          src="https://localshopindia.com/images/logo/logo-header.png"
          alt="LSI Logo"
        />
      </div>
      <div className="header__menu"></div>
    </header>
  );
};

export default Header;
