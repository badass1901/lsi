import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header w-full p-2">
      <div className="header__logo">
        <img
          src="https://www.lsi.com/wp-content/uploads/2019/12/LSI-Logo-White.png"
          alt="LSI Logo"
        />
      </div>
      <div className="header__menu"></div>
    </header>
  );
};

export default Header;
