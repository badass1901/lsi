import React from "react";
import "./Header.scss";
import Drawer from "../Drawer";
import { Link } from "react-router-dom";

import { InfoIcon, ShoppingCartIcon, PhoneIcon } from "../../utils/icons";
import { Divider } from "@mui/material";

const Header = () => {
  return (
    <header className="header flex justify-between w-full px-20 py-4">
      <div className="header__logo">
        <img
          className=" w-56"
          src="https://localshopindia.com/images/logo/logo-header.png"
          alt="LSI Logo"
        />
      </div>
      {/* <Drawer /> */}
      <ul className="header__menu w-1/3 flex flex-col md:flex-row lg:flex-row justify-normal md:justify-evenly lg:justify-evenly">
        <Link to="/cart">
          <li className="cart">
            <ShoppingCartIcon />
            <span>Cart</span>
          </li>
        </Link>
        <Link to="/contact">
          <li className="contact">
            <PhoneIcon />
            <span>Contact</span>
          </li>
        </Link>
        <Link to="/about">
          <li className="about">
            <InfoIcon />
            <span>About</span>
          </li>
        </Link>
      </ul>
      <hr />
    </header>
  );
};

export default Header;
