import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место Россия" className="logo" />
      <Link to="/sign-in" className="header__link">
          Войти
      </Link>
    </header>
  );
}

export default Header;
