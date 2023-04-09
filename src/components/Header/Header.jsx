import React from "react";
import "./Header.scss";

import { InfoIcon, ShoppingCartIcon, PhoneIcon } from "../../utils/icons";

const Header = () => {
  return (
    <header className="header w-full p-2">
      <div className="header__logo">
        <img
          src="https://localshopindia.com/images/logo/logo-header.png"
          alt="LSI Logo"
        />
      </div>
      <ul className="header__menu">
        <li className="cart">
          <ShoppingCartIcon />
          <span>Cart</span>
        </li>
        <li className="About">
          <InfoIcon />
          <span>About Us</span>
        </li>
        <li className="Contact">
          <PhoneIcon />
          <span>Contat</span>
        </li>
        <li className="Sign">
          <PhoneIcon />
          <span>Contat</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
