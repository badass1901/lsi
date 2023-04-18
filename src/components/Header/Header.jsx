import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { InfoIcon, ShoppingCartIcon, PhoneIcon } from "../../utils/icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="w-56"
          src="https://localshopindia.com/images/logo/logo-header.png"
          alt="LSI Logo"
        />
      </div>

      <ul className="header__menu">
        <Link to="/cart">
          <li className="cart">
            <ShoppingCartIcon />
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
